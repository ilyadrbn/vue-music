<template>
    <AppHeader />
    <RouterView />
    <AppAuth />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/layouts/AppHeader.vue";
import AppAuth from "@/layouts/Auth/AppAuth.vue";

export default defineComponent({
    name: "App",
    components: {
        AppHeader,
        AppAuth,
    },
});
</script>
