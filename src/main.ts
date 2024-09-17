// ? styles
import "@/assets/scss/main.scss";

// ? plugins
import { createApp } from "vue";
import { createPinia } from "pinia";
import { useUserStore } from "@/stores/user-store";
import { auth } from "@/plugins/firebase";
import validation from "@/plugins/vee-validation";
import router from "@/router";

// ? components
import App from "./App.vue";

// ? initialize app and other plugins
const pinia = createPinia();
const app = createApp(App);

// ? using
app.use(pinia).use(validation);

auth.authStateReady()
    .then(() => {
        if (auth.currentUser) {
            useUserStore().userLoggedIn = true;
        } else {
            useUserStore().userLoggedIn = false;
        }
    })
    .finally(() => {
        app.use(router); // ? router must have access to the pinia state
        app.mount("#app");
    });
