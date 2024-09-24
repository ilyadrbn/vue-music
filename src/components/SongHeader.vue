<template>
    <section class="relative mb-8 w-full py-14 text-center text-white">
        <div
            class="music-bg absolute inset-0 box-border h-full w-full bg-contain"
            style="background-image: url(/assets/img/song-header.png)"
        ></div>
        <div class="container mx-auto flex items-center">
            <!-- Play/Pause Button -->
            <button
                type="button"
                class="z-50 h-24 w-24 rounded-full bg-white text-3xl text-black focus:outline-none"
            >
                <i class="fas fa-play"></i>
            </button>
            <div class="z-50 ml-8 text-left">
                <!-- Song Info -->
                <div class="text-3xl font-bold">{{ name }}</div>
                <div>{{ artist }}</div>
                <div>{{ genre }}</div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "SongHeader",
    props: {
        name: {
            type: String,
            required: true,
            default: "",
        },
        artist: {
            type: String,
            required: true,
            default: "",
        },
        genre: {
            type: String,
            required: false,
            default: null,
        },
    },
});
</script>
