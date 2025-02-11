<script setup></script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/HomePage">HOME</RouterLink></li>
      <li><RouterLink to="/AboutPage">ABOUT</RouterLink></li>
      <li><RouterLink to="*">*</RouterLink></li>
    </ul>
  </nav>

  <main>
    <router-view />
    <!--This is where the content of the current route will be
    rendered--->
  </main>
</template>

<style>
.urbanist-font-style {
  font-family: "Urbanist", serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}

* {
  font-family: "Urbanist", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343d46;
  height: 50px;
  margin-bottom: 30px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  width: 100%;
}

li a {
  text-decoration: none;
  color: white;
  margin-right: 30px;
  font-size: 30px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
