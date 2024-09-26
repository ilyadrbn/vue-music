<template>
    <SongHeader
        :name="song.name"
        :artist="song.artist"
        :genre="song.genre"
        :song-info="song"
    />
    <SongForm @update-comments="updateComments" @sort-by="sortBy" />
    <CommentList :comment-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- plugins ------------------------ */
import { doc, db, getDoc } from "@/plugins/firebase-firestore";

/* *--------------------- types ------------------------ */
import type { ISongMeta } from "@/types/manage-types";
import type { IComment } from "@/types/comments-types";

/* *--------------------- components ------------------------ */
import SongHeader from "@/components/SongHeader.vue";
import SongForm from "@/layouts/SongForm.vue";
import CommentList from "@/components/CommentList.vue";

export default defineComponent({
    name: "PageSong",
    components: {
        SongHeader,
        SongForm,
        CommentList,
    },
    data() {
        return {
            song: {} as ISongMeta,
            commentList: [] as Array<IComment>,
        };
    },
    async created() {
        const docRef = doc(db, "songs", String(this.$route.params.id));
        const snapshot = await getDoc(docRef);

        if (!snapshot.exists()) {
            this.$router.push({ name: "Home" });
            return;
        }
        this.song = snapshot.data() as ISongMeta;
    },
    methods: {
        updateComments(commentList: Array<IComment>) {
            this.commentList = commentList
                .slice()
                .sort(
                    (a, b) =>
                        Date.parse(b.createdAt.toString()) -
                        Date.parse(a.createdAt.toString()),
                );
        },
        sortBy(sortMeth: string) {
            this.commentList = this.commentList.slice();
            switch (sortMeth) {
                case "Latest":
                    this.commentList.sort(
                        (a, b) =>
                            Date.parse(b.createdAt.toString()) -
                            Date.parse(a.createdAt.toString()),
                    );
                    break;
                case "Oldest":
                    this.commentList.sort(
                        (a, b) =>
                            Date.parse(a.createdAt.toString()) -
                            Date.parse(b.createdAt.toString()),
                    );
                    break;
            }
        },
    },
});
</script>
