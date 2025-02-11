<script setup>
import { ref } from "vue";

const teamSearch = ref("");
const team = ref(null);

// Format the Url to include https:// if it's not already there
function formatUrl(url) {
  return url.startsWith("http") ? url : `https://${url}`;
}

function onClick() {
  console.log(teamSearch.value);
  fetch(
    `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamSearch.value}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("API Response:", data);
      team.value = data.teams[0];
    })
    .catch((error) => {
      console.error("No data found:", error);
      team.value = null; // reset team to null if no data is found
    });
}
</script>
<template>
  <h1>Welcome To FootyBase</h1>
  <img src="/vite-vue-labb2/src/assets/logo.png" alt="FootyBase Logo" />
  <p>
    Find information about your favourite teams using our extensive database!
  </p>
  <div id="searchBox">
    <input
      id="searchField"
      type="text"
      placeholder="Search Team"
      v-model="teamSearch"
    />
    <input id="searchButton" type="button" value="Search" @click="onClick" />
  </div>

  <div id="teamContainer" v-if="team">
    <div id="teamInfoContainer">
      <img id="teamBadge" :src="team.strBadge" :alt="`${team.strTeam} Badge`" />
      <h2 id="teamTitle">{{ team.strTeam }}</h2>
      <h3>Team information</h3>
      <p class="teamInfo">Founded: {{ team.intFormedYear }}</p>
      <p class="teamInfo">Origin: {{ team.strCountry }}</p>
      <p class="teamInfo">League: {{ team.strLeague }}</p>
      <p class="teamInfo">Stadium: {{ team.strStadium }}</p>
      <p class="teamInfo">Stadium Capacity: {{ team.intStadiumCapacity }}</p>
    </div>

    <div id="socialMediasContainer">
      <a :href="formatUrl(team.strTwitter)" target="_blank"
        ><img
          class="socialMedias"
          src="/twitter.png"
          :alt="`${team.strTeam} Twitter`"
      /></a>
      <a :href="formatUrl(team.strInstagram)" target="_blank"
        ><img
          class="socialMedias"
          src="/instagram.png"
          :alt="`${team.strTeam} Instagram`"
      /></a>
      <a :href="formatUrl(team.strWebsite)" target="_blank"
        ><img
          class="socialMedias"
          src="/website.png"
          :alt="`${team.strTeam} Website`"
      /></a>
    </div>

    <div id="teamDescriptionContainer">
      <h3>Description</h3>
      <p id="teamDescription">{{ team.strDescriptionEN }}</p>
    </div>
  </div>
  <div v-else>
    <p>No team found</p>
  </div>
</template>
<style scoped>
.urbanist-font-style {
  font-family: "Urbanist", serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}

* {
  font-family: "Urbanist", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
#teamBadge {
  width: 100px;
  height: 100px;
  margin: 10px;
}

.socialMedias {
  width: 30px;
  height: 30px;
  margin: 5px;
}

#searchBox {
  margin: 10px;
}

#searchField {
  margin-right: 10px;
  height: 30px;
  width: 500px;
  border-radius: 5px;
  border: 1px solid #c0c5ce;
  color: white;
  background-color: #343d46;
  padding: 5px;
}

#searchButton {
  height: 30px;
  width: 90px;
  border-radius: 5px;
  border: 1px solid #c0c5ce;
  color: white;
  background-color: #343d46;
}

#teamContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
}

#teamDescriptionContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  width: 600px;
  margin: 10px;
  padding: 30px;
  background-color: #343d46;
  color: white;
  border-radius: 10px;
}

#teamDescriptionContainer h3 {
  font-size: 40px;
}

#teamInfoContainer {
  margin: 10px;
  padding: 30px;
  background-color: #343d46;
  color: white;
  width: 600px;
  text-align: center;
  border-radius: 10px;
}

#socialMediasContainer {
  background-color: #c0c5ce;
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
}
</style>
