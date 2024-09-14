<template>
    <AppHeader />
    <RouterView />
    <AppAuth />
    <AppLoader />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/layouts/AppHeader.vue";
import AppAuth from "@/layouts/Auth/AppAuth.vue";
import AppLoader from "@/layouts/AppLoader.vue";

export default defineComponent({
    name: "App",
    components: {
        AppHeader,
        AppAuth,
        AppLoader,
    },
});
</script>
