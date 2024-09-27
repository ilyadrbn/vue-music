<template>
    <AppHeader />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
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

<style lang="scss" scoped>
.fade-enter-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from {
    opacity: 0;
}

.fade-leave-to {
    transition: opacity 0.5s ease;
    opacity: 0;
}
</style>
