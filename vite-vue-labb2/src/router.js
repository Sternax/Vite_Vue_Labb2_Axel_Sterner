import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomePage,
      path: "/HomePage",
    },
    {
      component: AboutPage,
      path: "/AboutPage",
    },
  ],
});
