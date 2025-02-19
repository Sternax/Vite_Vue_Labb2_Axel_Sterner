<template>
  <div id="teamInfoContainer">
    <img id="teamBadge" :src="team.strBadge" :alt="`${team.strTeam} Badge`" />
    <h2 id="teamTitle">{{ team.strTeam }}</h2>
    <h3>Team information</h3>
    <p class="teamInfo">Founded: {{ team.intFormedYear }}</p>
    <p class="teamInfo">Origin: {{ team.strCountry }}</p>
    <p class="teamInfo">League: {{ team.strLeague }}</p>
    <p class="teamInfo">Stadium: {{ team.strStadium }}</p>
    <p class="teamInfo">Stadium Capacity: {{ team.intStadiumCapacity }}</p>
    <LikedTeams :team="team" />
  </div>
</template>

<script setup>
defineProps({ team: Object });
import LikedTeams from "../components/LikedTeams.vue";
</script>

<style scoped>
#teamBadge {
  width: 150px;
  height: 150px;
  margin: 10px;
}
#teamTitle {
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 20px;
}
#teamInfoContainer {
  margin: 10px;
  padding: 30px;
  background-color: #343d46;
  color: white;
  width: 600px;
  text-align: center;
  border-radius: 5px;
}

.teamInfo {
  font-size: 18px;
}
</style>
