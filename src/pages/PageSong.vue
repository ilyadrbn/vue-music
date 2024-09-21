<template>
    <SongHeader />
    <SongForm />
    <SongCommentList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- components ------------------------ */
import SongHeader from "@/components/SongHeader.vue";
import SongForm from "@/layouts/SongForm.vue";
import SongCommentList from "@/components/SongCommentList.vue";

export default defineComponent({
    name: "PageSong",
    components: {
        SongHeader,
        SongForm,
        SongCommentList,
    },
});
</script>
