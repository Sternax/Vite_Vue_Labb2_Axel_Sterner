<script setup>
import { ref, onMounted } from "vue";

const savedTeams = ref([]);

const removeTeam = (idTeam) => {
  const index = savedTeams.value.findIndex((t) => t.idTeam === idTeam);
  if (index !== -1) {
    savedTeams.value.splice(index, 1);
    localStorage.setItem("savedTeams", JSON.stringify(savedTeams.value));
  }
};

onMounted(() => {
  const savedTeamsFromLocalStorage = localStorage.getItem("savedTeams");
  if (savedTeamsFromLocalStorage) {
    savedTeams.value = JSON.parse(savedTeamsFromLocalStorage);
  }
});
</script>
<template>
  <div>
    <h1>Favourited Teams</h1>
    <ul v-if="savedTeams.length > 0">
      <li v-for="team in savedTeams" :key="team.idTeam" class="team-item">
        <div class="team-info">
          <h2>{{ team.strTeam }}</h2>
          <h3>{{ team.strCountry }}</h3>
          <p>{{ team.strLeague }}</p>
          <p>{{ team.intFormedYear }}</p>
        </div>

        <img
          class="teamBadge"
          :src="team.strBadge"
          :alt="`${team.strTeam} Badge`"
        />
        <input
          id="removeTeamButton"
          type="button"
          value="Remove Team"
          @click="removeTeam(team.idTeam)"
        />
      </li>
    </ul>
    <p id="noTeamInFavourites" v-else>No Teams Added to Favourites</p>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-size: 50px;
  margin-bottom: 30px;
  text-align: center;
}

#removeTeamButton {
  height: 30px;
  width: 100px;
  border-radius: 5px;
  border: none;
  color: #343d46;
  background-color: white;
}

ul {
  list-style-type: none;
}

.team-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  margin: 10px;
  background-color: #343d46;
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.teamBadge {
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
}

#noTeamInFavourites {
  font-size: 30px;
  text-align: center;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
    text-align: center;
  }

  .team-item {
    width: 350px;
  }

  .teamBadge {
    height: 50px;
    width: 50px;
  }

  #noTeamInFavourites {
    font-size: 20px;
    text-align: center;
  }
}
</style>
