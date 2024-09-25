<template>
    <select
        class="mt-4 block rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        @change="sortBy"
    >
        <option value="1">Latest</option>
        <option value="2">Oldest</option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "CommentSort",
    methods: {
        sortBy() {
            console.log(123);
        },
    },
});
</script>

<style scoped></style>
