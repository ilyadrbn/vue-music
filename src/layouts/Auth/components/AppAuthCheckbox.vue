<template>
    <div class="mb-3 pl-6">
        <input :type="type" class="float-left -ml-6 mt-1 h-4 w-4 rounded" />
        <label class="inline-block">Accept terms of service</label>
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
    },
});
</script>

<style scoped></style>
