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
    <routerView />
    <!--This is where the content of the current route will be
    rendered--->
  </main>
</template>

<style scoped>
* {
  background: red;
}
</style>
