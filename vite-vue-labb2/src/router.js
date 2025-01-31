import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./views/HomePage.vue"; // Fill in with page names
import AboutPage from "./views/AboutPage.vue";
// import * from './views/*'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomePage, // Fill in with page name
      path: "/HomePage", // Fill in with page path
    },
    {
      component: AboutPage,
      path: "/AboutPage",
    },
    // {
    //   component: *,
    //   path: '/' // Home page can be left empty
    // }
  ],
});
