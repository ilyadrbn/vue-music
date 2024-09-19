<template>
    <div class="col-span-2">
        <div
            class="relative flex flex-col rounded border border-gray-200 bg-white"
        >
            <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
                <span class="card-title">My Songs</span>
                <i
                    class="fa fa-compact-disc float-right text-2xl text-green-400"
                ></i>
            </div>
            <div class="p-6">
                <EditBlock
                    v-for="file in fileList"
                    :key="file.id"
                    :file-info="file"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditBlock from "../components/EditBlock.vue";
import {
    db,
    collection,
    onSnapshot,
    auth,
    query,
    where,
} from "@/plugins/firebase";

export default defineComponent({
    name: "ManageEdit",
    components: {
        EditBlock,
    },
    data() {
        return {
            fileList: [] as {
                id: string;
            }[],
        };
    },
    async created() {
        // ? https://firebase.google.com/docs/firestore/query-data/listen?hl=ru&authuser=0#listen_to_multiple_documents_in_a_collection
        const q = await query(
            collection(db, "songs"),
            where("uid", "==", auth.currentUser?.uid),
        );
        await onSnapshot(q, (doc) => {
            this.fileList = doc.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
        });
    },
});
</script>
