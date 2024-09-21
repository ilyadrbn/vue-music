<template>
    <li
        class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
    >
        <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
        </div>

        <div class="text-lg text-gray-600">
            <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                15
            </span>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MusicItem",
});
</script>

<style scoped></style>
