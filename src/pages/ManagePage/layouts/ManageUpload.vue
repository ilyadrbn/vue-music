<template>
    <div class="col-span-1">
        <div
            class="relative flex flex-col rounded border border-gray-200 bg-white"
        >
            <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
                <span class="card-title">Upload</span>
                <i
                    class="fas fa-upload float-right text-2xl text-green-400"
                ></i>
            </div>
            <div class="p-6">
                <!-- Upload Dropbox -->
                <UploadDropbox />
                <hr class="my-6" />
                <!-- Progess Bars -->
                <UploadIndicators />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import UploadDropbox from "../components/UploadDropbox.vue";
import UploadIndicators from "../components/UploadIndicators.vue";

export default defineComponent({
    name: "ManageUpload",
    components: {
        UploadDropbox,
        UploadIndicators,
    },
});
</script>
