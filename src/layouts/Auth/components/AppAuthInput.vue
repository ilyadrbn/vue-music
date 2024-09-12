<template>
    <div class="mb-3">
        <label class="mb-2 inline-block">{{
            customLabel ?? type.charAt(0).toUpperCase() + type.slice(1)
        }}</label>
        <input
            :type="type"
            class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
            :placeholder="customPlaceholder ?? `Enter ${type}`"
            :min="min"
            :max="max"
            :step="step"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthInput",
    props: {
        type: {
            type: String,
            required: true,
        },
        customLabel: {
            type: String,
            required: false,
            default: null,
        },
        customPlaceholder: {
            type: String,
            required: false,
            default: null,
        },
        min: {
            type: String,
            required: false,
            default: null,
        },
        max: {
            type: String,
            required: false,
            default: null,
        },
        step: {
            type: String,
            required: false,
            default: null,
        },
    },
});
</script>
