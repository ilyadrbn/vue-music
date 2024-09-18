<template>
    <div class="mb-4">
        <div class="text-sm font-bold">{{ fileInfo.name }}</div>
        <div class="flex h-4 overflow-hidden rounded bg-gray-200">
            <div
                class="progress-bar bg-blue-400 transition-all"
                :style="{ width: fileInfo.progress + '%' }"
                :class="{
                    'animate-none bg-blue-600 transition-none':
                        fileInfo.progress === 100,
                    'bg-red-600': isFailed,
                }"
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
        isFailed: {
            type: Boolean,
            default: false,
        },
    },
});
</script>
