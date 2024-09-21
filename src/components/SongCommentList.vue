<template>
    <ul class="container mx-auto">
        <SongCommentItem />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- components ------------------------ */
import SongCommentItem from "./SongCommentItem.vue";

export default defineComponent({
    name: "SongCommentList",
    components: {
        SongCommentItem,
    },
});
</script>
