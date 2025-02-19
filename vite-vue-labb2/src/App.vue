<script setup></script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/HomePage">Home</RouterLink></li>
      <li><RouterLink to="/AboutPage">About</RouterLink></li>
      <li><RouterLink to="/FavouritesPage">Favourites</RouterLink></li>
    </ul>
  </nav>

  <main>
    <router-view />
    <!--This is where the content of the current route will be
    rendered--->
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #23292f;
  height: 60px;
  margin-bottom: 30px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
}

li a {
  text-decoration: none;
  color: white;
  margin: 0 20px;
  font-size: 30px;
  border-radius: 5px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: all 0.5s ease;
}

li a:hover {
  cursor: pointer;
  background-color: #343d46;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media screen and (max-width: 600px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  li a {
    font-size: 20px;
    margin: 0;
  }
}
</style>
