// ? styles
import "@/assets/scss/main.scss";

// ? plugins
import { createApp } from "vue";
import { createPinia } from "pinia";
import validation from "@/plugins/vee-validation";
import router from "@/router";

// ? components
import App from "./App.vue";

// ? initialize app and other plugins
const pinia = createPinia();
const app = createApp(App);

// ? using
app.use(router).use(pinia).use(validation);
app.mount("#app");
