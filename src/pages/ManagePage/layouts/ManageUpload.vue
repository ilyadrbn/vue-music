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
                <UploadDropbox
                    @upload-progress="getProgressStatus"
                    @upload-failed="isFailed = true"
                />
                <hr class="my-6" />
                <template v-for="(val, key) in filesProgress" :key="key">
                    <UploadIndicators
                        v-if="filesProgress"
                        :file-info="{
                            name: String(key),
                            progress: Number(val),
                        }"
                        :is-failed="isFailed"
                    />
                </template>
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
    data() {
        return {
            filesProgress: {} as { [key: string]: number },
            isFailed: false,
        };
    },
    methods: {
        getProgressStatus(progress: { [key: string]: number }): void {
            this.filesProgress = { ...progress };
        },
    },
});
</script>
