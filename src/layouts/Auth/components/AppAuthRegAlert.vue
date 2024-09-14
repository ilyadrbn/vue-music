<template>
    <div
        v-if="regShowAlert"
        class="mb-4 rounded p-4 text-center font-bold text-white"
        :class="{ 'bg-purple-500': regShowAlert }"
    >
        {{ regAlertMsg }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthRegAlert",
    props: {
        regShowAlert: {
            type: Boolean,
            required: true,
        },
        regAlertMsg: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped></style>
