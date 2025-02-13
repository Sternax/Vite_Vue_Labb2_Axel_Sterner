import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";
import FavouritesPage from "./views/FavouritesPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/HomePage",
    },
    {
      component: HomePage,
      path: "/HomePage",
    },
    {
      component: AboutPage,
      path: "/AboutPage",
    },
    {
      component: FavouritesPage,
      path: "/FavouritesPage",
    },
  ],
});
