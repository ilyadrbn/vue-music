<template>
    <div class="mb-3 pl-6">
        <input
            :id="name"
            :type="type"
            class="float-left -ml-6 mt-1 h-4 w-4 rounded"
            :name="name"
        />
        <label class="inline-block" :for="name">Accept terms of service</label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthCheckbox",
    props: {
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: false,
            default: null,
        },
    },
});
</script>

<style scoped></style>
