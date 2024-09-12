<template>
    <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGlobalStore from "@/store";

export default defineComponent({
    name: "App",
    data() {
        return {
            globalStore: useGlobalStore(),
        };
    },
    mounted() {
        // console.log(this.globalStore.count);
    },
});
</script>

<style lang="scss" scoped></style>
