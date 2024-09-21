<template>
    <ol id="playlist">
        <PlaylistItem v-for="song in 10" :key="song" />
    </ol>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *------------------- components -------------------- */
import PlaylistItem from "@/components/PlaylistItem.vue";

export default defineComponent({
    name: "MusicList",
    components: {
        PlaylistItem,
    },
});
</script>

<style scoped></style>
