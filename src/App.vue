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

import AppHeader from "@/layouts/AppHeader.vue";
import AppPlayer from "@/layouts/AppPlayer.vue";
import AppAuth from "@/layouts/AppAuth.vue";
import AppLoader from "@/layouts/AppLoader.vue";
import AppMsgInfo from "@/layouts/AppMsgInfo.vue";

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
