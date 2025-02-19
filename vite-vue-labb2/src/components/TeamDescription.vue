<template>
  <div id="teamDescriptionContainer">
    <h3>Description</h3>
    <p id="teamDescription">{{ team.strDescriptionEN }}</p>
  </div>
</template>

<script setup>
defineProps({ team: Object });
</script>

<style scoped>
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
  border-radius: 5px;
}
#teamDescriptionContainer h3 {
  font-size: 40px;
}
</style>
