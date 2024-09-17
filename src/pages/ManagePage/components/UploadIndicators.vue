<template>
    <div class="mb-4">
        <!-- File Name -->
        <div class="text-sm font-bold">Just another song.mp3</div>
        <div class="flex h-4 overflow-hidden rounded bg-gray-200">
            <!-- Inner Progress Bar -->
            <div
                class="progress-bar bg-blue-400 transition-all"
                style="width: 75%"
            ></div>
        </div>
    </div>
    <div class="mb-4">
        <div class="text-sm font-bold">Just another song.mp3</div>
        <div class="flex h-4 overflow-hidden rounded bg-gray-200">
            <div
                class="progress-bar bg-blue-400 transition-all"
                style="width: 35%"
            ></div>
        </div>
    </div>
    <div class="mb-4">
        <div class="text-sm font-bold">Just another song.mp3</div>
        <div class="flex h-4 overflow-hidden rounded bg-gray-200">
            <div
                class="progress-bar bg-blue-400 transition-all"
                style="width: 55%"
            ></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "UploadDropbox",
});
</script>
