<template>
  <div id="socialMediasContainer">
    <a :href="formatUrl(team.strTwitter)" target="_blank">
      <img
        class="socialMedias"
        src="/twitter.png"
        :alt="`${team.strTeam} Twitter`"
      />
    </a>
    <a :href="formatUrl(team.strInstagram)" target="_blank">
      <img
        class="socialMedias"
        src="/instagram.png"
        :alt="`${team.strTeam} Instagram`"
      />
    </a>
    <a :href="formatUrl(team.strWebsite)" target="_blank">
      <img
        class="socialMedias"
        src="/website.png"
        :alt="`${team.strTeam} Website`"
      />
    </a>
  </div>
</template>

<script setup>
defineProps({ team: Object });

function formatUrl(url) {
  return url.startsWith("http") ? url : `https://${url}`;
}
</script>

<style scoped>
.socialMedias {
  width: 30px;
  height: 30px;
  margin: 5px;
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
