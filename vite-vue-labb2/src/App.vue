<script setup></script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/HomePage">Home</RouterLink></li>
      <li><RouterLink to="/AboutPage">About</RouterLink></li>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
