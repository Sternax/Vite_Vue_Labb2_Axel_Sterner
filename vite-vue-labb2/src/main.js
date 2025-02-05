import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
// import Vue from "vue";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";

// Vue.use(Vuetify);

createApp(App).use(router).mount("#app");
