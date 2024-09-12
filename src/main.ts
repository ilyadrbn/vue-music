// ? styles
import "@/assets/scss/main.scss";

// ? dependencies
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router";

// ? components
import App from "./app.vue";

// ? instances
const pinia = createPinia();
const app = createApp(App);

// ? using
app.use(router).use(pinia);
app.mount("#app");
