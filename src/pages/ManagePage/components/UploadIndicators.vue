<template>
    <div class="mb-4">
        <!-- File Name -->
        <div class="text-sm font-bold">{{ fileInfo.name }}</div>
        <div class="flex h-4 overflow-hidden rounded bg-gray-200">
            <!-- Inner Progress Bar -->
            <div
                class="progress-bar bg-blue-400 transition-all"
                :style="{ width: fileInfo.progress + '%' }"
            ></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "UploadDropbox",
    props: {
        fileInfo: {
            type: Object as () => {
                name: string;
                progress: number;
            },
            required: true,
        },
    },
});
</script>
