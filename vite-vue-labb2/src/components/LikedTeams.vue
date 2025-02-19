<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  team: {
    type: Object,
    required: true,
  },
});

const savedTeams = ref([]);

function saveTeam() {
  if (
    props.team &&
    !savedTeams.value.some((t) => t.idTeam === props.team.idTeam)
  ) {
    savedTeams.value.push(props.team);
    localStorage.setItem("savedTeams", JSON.stringify(savedTeams.value));

    console.log(savedTeams.value);
    alert("Team saved as favourite");
  } else {
    alert("Team already saved as favourite");
  }
}

onMounted(() => {
  const savedTeamsFromLocalStorage = localStorage.getItem("savedTeams");
  if (savedTeamsFromLocalStorage) {
    savedTeams.value = JSON.parse(savedTeamsFromLocalStorage);
  }
});
</script>
<template>
  <div>
    <input type="button" value="Save Team as Favourite" @click="saveTeam" />
  </div>
</template>
<style scoped>
input {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #c0c5ce;
  color: white;
  background-color: #343d46;
}

input:hover {
  cursor: pointer;
  background-color: #c0c5ce;
  border: 1px solid #343d46;
  color: #343d46;
}
</style>
