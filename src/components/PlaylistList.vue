<template>
    <ol id="playlist">
        <PlaylistItem v-for="song in songs" :key="song.id" :song />
    </ol>
</template>

<script lang="ts">
import { defineComponent } from "vue";
/* *------------------- plugins -------------------- */
import { auth } from "@/plugins/firebase-auth";
import {
    songsCollection,
    getDocs,
    query,
    where,
    limit,
    orderBy,
    startAfter,
} from "@/plugins/firebase-firestore";

/* *--------------------- types ------------------------ */
import type { ISongMeta } from "@/types/manage-types";

/* *------------------- components -------------------- */
import PlaylistItem from "@/components/PlaylistItem.vue";

export default defineComponent({
    name: "MusicList",
    components: {
        PlaylistItem,
    },
    data() {
        return {
            songs: [] as (ISongMeta & { id: string })[],
            maxPerPage: 20 as number,
        };
    },
    created() {
        console.log("playlist created");
        this.getSongs();
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(): void {
            const { scrollTop, offsetHeight } = document.documentElement;
            const { innerHeight } = window;
            const bottomOfWindow =
                Math.round(scrollTop) + innerHeight === offsetHeight;

            if (bottomOfWindow) {
                this.getSongs();
            }
        },
        async getSongs(): Promise<void> {
            const currentLast = this.songs[this.songs.length - 1];
            const q = query(
                songsCollection,
                where("uid", "==", auth.currentUser?.uid),
                orderBy("name"),
                startAfter(currentLast ? currentLast.name : null),
                limit(this.maxPerPage),
            );
            const querySnapshots = await getDocs(q);

            querySnapshots.forEach((doc) => {
                this.songs.push({
                    id: doc.id,
                    ...(doc.data() as ISongMeta),
                });
            });
        },
    },
});
</script>

<style scoped></style>
