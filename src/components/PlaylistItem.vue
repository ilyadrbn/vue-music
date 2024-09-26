<template>
    <li
        class="cursor-pointer p-3 pl-6 transition duration-300 hover:bg-gray-50"
    >
        <router-link
            :to="{ name: 'Song', params: { id: song.id } }"
            class="flex items-center justify-between font-bold text-gray-600"
        >
            <div class="flex flex-col">
                <p>{{ song.name }}</p>
                <div>
                    <span class="text-sm text-gray-500">{{ song.artist }}</span>
                </div>
            </div>

            <div class="text-lg text-gray-600">
                <span class="comments">
                    <i class="fa fa-comments text-gray-600"></i>
                    {{ song.countOfComment }}
                </span>
            </div>
        </router-link>
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
