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
      team.value = null; // Reset the team ref if no data is found
    });
}
</script>
<template>
  <h1>Welcome To FootyBase</h1>
  <p>
    Find information about your favourite teams using our extensive database!
  </p>
  <input type="text" placeholder="Search Team" v-model="teamSearch" />
  <!-- <v-autocomplete label="Autocomplete" :items="[team.strTeam]"></v-autocomplete> -->
  <input type="button" value="Search" @click="onClick" />

  <div id="teamContainer" v-if="team">
    <img id="teamBadge" :src="team.strBadge" :alt="`${team.strTeam} Badge`" />
    <h2 id="teamTitle">{{ team.strTeam }}</h2>

    <h3>Team information</h3>
    <p class="teamInfo">Founded: {{ team.intFormedYear }}</p>
    <p class="teamInfo">Origin: {{ team.strCountry }}</p>
    <p class="teamInfo">League: {{ team.strLeague }}</p>
    <p class="teamInfo">Stadium: {{ team.strStadium }}</p>
    <p class="teamInfo">Stadium Capacity: {{ team.intStadiumCapacity }}</p>

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
    <h3>Description</h3>
    <p class="teamInfo">{{ team.strDescriptionEN }}</p>
  </div>
  <div v-else>
    <p>No team found</p>
  </div>
</template>
<style scoped>
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
</style>
