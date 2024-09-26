<template>
    <div
        v-if="isPlaying"
        class="fixed bottom-0 left-0 w-full bg-white px-4 py-2"
    >
        <div class="text-center">
            <span class="song-title font-bold">{{
                (currentSong as ISongMeta).name
            }}</span>
            by
            <span class="song-artist">{{
                (currentSong as ISongMeta).artist
            }}</span>
        </div>
        <div class="flex flex-nowrap items-center gap-4">
            <button type="button" @click.prevent="toggleMusic">
                <i
                    :class="{ 'fa-pause': isPlaying, 'fa-play': !isPlaying }"
                    class="fa text-xl text-gray-500"
                ></i>
            </button>
            <div class="player-currenttime">{{ seek }}</div>
            <div class="relative h-2 w-full cursor-pointer rounded bg-gray-200">
                <span
                    class="absolute -top-2.5 -ml-2.5 text-lg text-gray-800"
                    :style="{ left: playerProgress }"
                >
                    <i class="fas fa-circle"></i>
                </span>
                <span
                    class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
                    :style="{ width: playerProgress }"
                ></span>
            </div>
            <div class="player-duration">{{ duration }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- stores ------------------------ */
import { useMusicStore } from "@/stores/music-store";

/* *--------------------- types ------------------------ */
import type { ISongMeta } from "@/types/manage-types";

export default defineComponent({
    name: "AppPlayer",
    data() {
        return {
            musicStore: useMusicStore(),
        };
    },
    computed: {
        isPlaying(): boolean {
            return this.musicStore.isPlaying;
        },
        seek(): string {
            return this.musicStore.seek;
        },
        duration(): string {
            return this.musicStore.duration;
        },
        playerProgress(): string {
            return this.musicStore.playerProgress;
        },
        currentSong(): ISongMeta | object {
            return this.musicStore.currentSong;
        },
    },
    methods: {
        toggleMusic() {
            this.musicStore.toggleMusic();
        },
    },
});
</script>
