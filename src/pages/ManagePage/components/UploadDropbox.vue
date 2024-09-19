<template>
    <div
        class="w-full cursor-pointer rounded border border-dashed border-gray-400 px-10 py-20 text-center text-gray-400 transition duration-500 hover:border-solid hover:border-green-400 hover:bg-green-400 hover:text-white"
        :class="{
            'border-solid border-green-400 bg-green-400 text-white': isDragover,
        }"
        @drag.prevent.stop=""
        @dragstart.prevent.stop=""
        @dragend.prevent.stop="isDragover = false"
        @dragover.prevent.stop="isDragover = true"
        @dragenter.prevent.stop="isDragover = true"
        @dragleave.prevent.stop="isDragover = false"
        @drop.prevent.stop="uploadFile($event)"
    >
        <h5>Drop your files here</h5>
    </div>
    <input type="file" multiple @change="uploadFile($event)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePopupStore } from "@/stores/popup-store";
import { auth, db } from "@/plugins/firebase";
import {
    collection,
    addDoc,
    storage,
    ref as storageRef,
    uploadBytesResumable,
    getDownloadURL,
} from "@/plugins/firebase";
import { type SongMeta } from "../manage";

export default defineComponent({
    name: "UploadDropbox",
    emits: ["upload-progress", "upload-failed", "upload-success"],
    data() {
        return {
            popupStore: usePopupStore(),
            isDragover: false as boolean,
            uploadResources: {} as { [key: string]: number },
        };
    },
    unmounted(): void {
        console.log(this);
    },
    methods: {
        uploadFile($event: DragEvent | Event): void {
            this.isDragover = false;

            const files =
                $event instanceof DragEvent
                    ? [...$event.dataTransfer!.files]
                    : Array.from(
                          ($event.target as HTMLInputElement)?.files ?? [],
                      );

            files.forEach((file: File): void => {
                if (file.type !== "audio/mpeg") {
                    this.popupStore.showMessage(
                        "Error",
                        "Only mp3 files are allowed",
                        "Error",
                    );
                    throw new Error("You can only upload mp3 files");
                }
                const fileRef = storageRef(storage, `songs/${file.name}`);
                const uploadTask = uploadBytesResumable(fileRef, file);
                // ? https://firebase.google.com/docs/storage/web/upload-files?hl=ru&authuser=0#monitor_upload_progress

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const uploadProgress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) *
                            100;

                        this.uploadResources[file.name] = uploadProgress;

                        this.$emit("upload-progress", this.uploadResources);
                    },
                    (error) => {
                        this.$emit("upload-failed");
                        this.popupStore.showMessage(
                            "Error",
                            error.message,
                            "Error",
                        );
                        return;
                    },
                    async () => {
                        const songMeta: SongMeta = {
                            uid: auth.currentUser!.uid,
                            name: file.name.replace(/\.[^/.]+$/, ""),
                            genre: "",
                            countOfComment: 0,
                            fileUrl: "",
                        };

                        await getDownloadURL(uploadTask.snapshot.ref).then(
                            (downloadURL) => {
                                songMeta.fileUrl = downloadURL;
                            },
                        );

                        await addDoc(collection(db, "songs"), songMeta);

                        this.$emit("upload-success");
                        this.popupStore.showMessage(
                            "Success",
                            "Song uploaded successfully",
                            "Success",
                        );
                    },
                );
            });
        },
    },
});
</script>
