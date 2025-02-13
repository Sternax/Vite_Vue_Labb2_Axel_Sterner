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
<style scoped></style>
