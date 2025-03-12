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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
#teamDescriptionContainer h3 {
  font-size: 40px;
  margin-bottom: 30px;
}

@media screen and (max-width: 600px) {
  #teamDescriptionContainer {
    width: 350px;
    margin-top: 10px;
  }

  #teamDescription {
    font-size: 16px;
  }
}
</style>
