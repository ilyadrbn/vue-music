<template>
    <ul class="container mx-auto">
        <CommentItem
            v-for="(comment, index) in commentList"
            :key="index"
            :comment="comment"
        />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- types ------------------------ */
import type { IComment } from "@/types/comments-types";

/* *--------------------- components ------------------------ */
import CommentItem from "./CommentItem.vue";

export default defineComponent({
    name: "SongCommentList",
    components: {
        CommentItem,
    },
    props: {
        commentList: {
            type: Array as () => IComment[],
            required: true,
        },
    },
});
</script>
