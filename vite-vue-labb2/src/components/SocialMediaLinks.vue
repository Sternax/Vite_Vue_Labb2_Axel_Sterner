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
}
#socialMediasContainer {
  width: 600px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #c0c5ce;
  margin: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

#socialMediasContainer a {
  height: 30px;
  width: 30px;
  margin: 0 30px;
}

@media screen and (max-width: 600px) {
  #socialMediasContainer {
    width: 350px;
  }
}
</style>
