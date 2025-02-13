<template>
  <h1 id="headerTitle">
    Welcome To FootyBase <img id="logo" src="/logo.png" alt="FootyBase Logo" />
  </h1>

  <p id="searchBoxDescription">
    Find information about your favourite teams using our extensive database!
  </p>

  <SearchBox v-model="teamSearch" @search="onClick" />

  <div id="teamContainer" v-if="team">
    <TeamInfo :team="team" />
    <SocialMediaLinks :team="team" />
    <TeamDescription :team="team" />
  </div>

  <div v-else>
    <p>No team found</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SearchBox from "../components/SearchBox.vue";
import TeamInfo from "../components/TeamInfo.vue";
import SocialMediaLinks from "../components/SocialMediaLinks.vue";
import TeamDescription from "../components/TeamDescription.vue";

const teamSearch = ref("");
const team = ref(null);

function onClick() {
  fetch(
    `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${teamSearch.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      team.value = data.teams ? data.teams[0] : null;
      localStorage.setItem("savedTeam", JSON.stringify(team.value));
    })
    .catch(() => {
      team.value = null;
      localStorage.removeItem("savedTeam");
    });
}

onMounted(() => {
  const savedTeam = localStorage.getItem("savedTeam");
  if (savedTeam) {
    team.value = JSON.parse(savedTeam);
  }
});
</script>

<style scoped>
#headerTitle {
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 600;
}
#logo {
  width: 50px;
  height: auto;
}
#searchBoxDescription {
  font-size: 20px;
  margin-bottom: 10px;
}
#teamContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
}
</style>
