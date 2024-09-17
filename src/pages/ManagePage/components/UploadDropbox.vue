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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePopupStore } from "@/stores/popup-store";
import {
    // firebaseConfig,
    storage,
    ref as storageRef,
    uploadBytes,
} from "@/plugins/firebase";

export default defineComponent({
    name: "UploadDropbox",
    data() {
        return {
            popupStore: usePopupStore(),
            isDragover: false as boolean,
        };
    },
    methods: {
        uploadFile($event: DragEvent): void {
            this.isDragover = false;

            const files: File[] = [...$event.dataTransfer!.files];

            files.forEach((file: File): void => {
                if (file.type !== "audio/mpeg") {
                    this.popupStore.showMessage(
                        "Error",
                        "Only mp3 files are allowed",
                        "Error",
                    );
                    throw new Error("You can only upload mp3 files");
                }
                // console.log(firebaseConfig.storageBucket);
                const fileRef = storageRef(storage, `songs/${file.name}`);
                uploadBytes(fileRef, file)
                    .then(() => {
                        this.popupStore.showMessage(
                            "Success",
                            "Files uploaded successfully",
                            "Success",
                        );
                    })
                    .catch((error) => {
                        this.popupStore.showMessage(
                            "Error",
                            error.message,
                            "Error",
                        );
                    });
            });
        },
    },
});
</script>
