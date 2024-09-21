<template>
    <AppHeader />
    <RouterView />
    <AppAuth />
    <AppPlayer />
    <AppLoader />
    <AppMsgInfo />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/layouts/TheHeader.vue";
import AppPlayer from "@/layouts/ThePlayer.vue";
import AppAuth from "@/layouts/AppAuth.vue";
import AppLoader from "@/layouts/TheLoader.vue";
import AppMsgInfo from "@/layouts/TheNotification.vue";

export default defineComponent({
    name: "App",
    components: {
        AppHeader,
        AppPlayer,
        AppAuth,
        AppLoader,
        AppMsgInfo,
    },
});
</script>
