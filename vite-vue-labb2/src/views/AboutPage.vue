<script setup>
import { ref } from "vue";

const footballTitle = ref("Football");
const footballInfo = ref(
  "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football generally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in Australia, Canada, South Africa, the United States, and sometimes in Ireland and New Zealand); Australian rules football; Gaelic football; gridiron football (specifically American football, arena football, or Canadian football); International rules football; rugby league football; and rugby union football. These various forms of football share, to varying degrees, common origins and are known as 'football codes'.\n\nThere are a number of references to traditional, ancient, or prehistoric ball games played in many different parts of the world. Contemporary codes of football can be traced back to the codification of these games at English public schools during the 19th century, itself an outgrowth of medieval football. The expansion and cultural power of the British Empire allowed these rules of football to spread to areas of British influence outside the directly controlled empire. By the end of the 19th century, distinct regional codes were already developing: Gaelic football, for example, deliberately incorporated the rules of local traditional football games in order to maintain their heritage. In 1888, the Football League was founded in England, becoming the first of many professional football associations. During the 20th century, several of the various kinds of football grew to become some of the most popular team sports in the world."
);
</script>
<template>
  <div id="footballAboutPage">
    <h1>{{ footballTitle }}</h1>
    <p>{{ footballInfo }}</p>

    <a href="https://en.wikipedia.org/wiki/Football" target="_blank"
      >Read More About Football At Wikipedia.org</a
    >
  </div>
</template>
<style scoped>
#footballAboutPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 800px;
  background-color: #343d46;
  color: white;
  padding: 30px;
  border-radius: 10px;
}

h1 {
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 600;
}

p {
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: 30px;
}

a {
  color: white;
  font-size: 20px;
  transition: all 0.3s ease;
}

a:hover {
  transform: scale(1.1);
}
</style>
