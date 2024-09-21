<template>
    <li
        class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
    >
        <div>
            <a href="#" class="block font-bold text-gray-600">{{
                song.name
            }}</a>
            <span class="text-sm text-gray-500">{{ song.artist }}</span>
        </div>

        <div class="text-lg text-gray-600">
            <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                {{ song.countOfComment }}
            </span>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- types ------------------------ */
import type { ISongMeta } from "@/types/manage-types";

export default defineComponent({
    name: "MusicItem",
    props: {
        song: {
            type: Object as () => ISongMeta & { id: string },
            required: true,
        },
    },
});
</script>

<style scoped></style>
