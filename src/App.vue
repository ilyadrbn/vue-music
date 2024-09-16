<template>
    <AppHeader />
    <RouterView />
    <AppAuth />
    <AppLoader />
    <AppMsgInfo />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { auth } from "@/plugins/firebase-cfg";
import { useUserStore } from "@/stores/user-store";

import AppHeader from "@/layouts/AppHeader.vue";
import AppAuth from "@/layouts/AppAuth.vue";
import AppLoader from "@/layouts/AppLoader.vue";
import AppMsgInfo from "@/layouts/AppMsgInfo.vue";

export default defineComponent({
    name: "App",
    components: {
        AppHeader,
        AppAuth,
        AppLoader,
        AppMsgInfo,
    },
    data() {
        return {
            userStore: useUserStore(),
        };
    },
    created() {
        auth.authStateReady().then(() => {
            if (auth.currentUser) {
                console.log("user logged in");
                this.userStore.userLoggedIn = true;
            } else {
                console.log("user not logged in");
            }
        });
    },
    methods: {},
});
</script>
