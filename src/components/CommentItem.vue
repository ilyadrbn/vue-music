<template>
    <li class="border border-gray-200 bg-gray-50 p-6">
        <div class="mb-5">
            <div class="font-bold">{{ comment.username }}</div>
            <time>{{ comment.createdAt }}</time>
        </div>

        <p>
            {{ comment.comment }}
        </p>
    </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "CommentItem",
    props: {
        comment: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style scoped></style>
