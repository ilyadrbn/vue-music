<template>
    <main>
        <HomeHeader />

        <section class="container mx-auto">
            <div
                class="relative flex flex-col rounded border border-gray-200 bg-white"
            >
                <PlaylistHeader />
                <Playlist v-if="userStore.userLoggedIn" />
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *------------------- stores -------------------- */
import { useUserStore } from "@/stores/user-store";

/* *------------------- components -------------------- */
import HomeHeader from "@/components/PlaylistPageHeader.vue";
import PlaylistHeader from "@/components/PlaylistHeader.vue";
import Playlist from "@/components/PlaylistList.vue";

export default defineComponent({
    name: "HomePage",
    components: {
        HomeHeader,
        PlaylistHeader,
        Playlist,
    },
    data() {
        return {
            userStore: useUserStore(),
        };
    },
});
</script>
