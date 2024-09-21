// ? styles
import "@/assets/scss/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

// ? plugins
import "@/plugins/firebase";
import { auth } from "@/plugins/firebase-auth";
import validation from "@/plugins/vee-validation";

// ? stores
import { useUserStore } from "@/stores/user-store";

// ? router
import router from "@/router";

// ? components
import App from "./App.vue";

// ? initialize app and other plugins
const pinia = createPinia();
const app = createApp(App);

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
