<template>
  <h1 id="headerTitle">
    Welcome To FootyBase <img id="logo" src="/logo.png" alt="FootyBase Logo" />
  </h1>

  <p id="searchBoxDescription">Find your favourite football team!</p>

  <SearchBox v-model="teamSearch" @search="onClick" />

  <div id="teamContainer" v-if="team">
    <TeamInfo :team="team" />
    <TeamDescription :team="team" />
    <SocialMediaLinks :team="team" />
  </div>

  <div v-else>
    <p>No team found</p>
  </div>
</template>

<script setup>
// Import components
import { ref, onMounted } from "vue";
import SearchBox from "../components/SearchBox.vue";
import TeamInfo from "../components/TeamInfo.vue";
import SocialMediaLinks from "../components/SocialMediaLinks.vue";
import TeamDescription from "../components/TeamDescription.vue";
import axios from "axios";

const teamSearch = ref("");
const team = ref(null);

//Function that fetches the team data from the API
function onClick() {
  axios
    .get(
      `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamSearch.value}`
    )
    .then((res) => {
      console.log(res.data.teams);
      team.value = res.data.teams ? res.data.teams[0] : null;
      localStorage.setItem("savedTeam", JSON.stringify(team.value)); //Save team to local storage
    })
    .catch(() => {
      team.value = null;
      localStorage.removeItem("savedTeam"); //Remove saved team if not found
    });
}

onMounted(() => {
  const savedTeam = localStorage.getItem("savedTeam");
  if (savedTeam) {
    team.value = JSON.parse(savedTeam); //Load saved team from local storage
  }
});
</script>

<style scoped>
#headerTitle {
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 600;
  color: white;
}
#logo {
  width: 50px;
  height: auto;
}
#searchBoxDescription {
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
  width: 600px;
  text-align: center;
}
#teamContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
}

@media screen and (max-width: 600px) {
  #headerTitle {
    font-size: 30px;
  }
  #searchBoxDescription {
    font-size: 16px;
    width: 350px;
  }

  #teamContainer {
    width: 350px;
  }

  #teamInfoContainer {
    width: 350px;
  }
}
</style>
