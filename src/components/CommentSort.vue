<template>
    <select
        v-model="selectedValue"
        class="mt-4 block rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        @change="sortBy"
    >
        <option v-for="option in selectedOptions" :key="option" :value="option">
            {{ option }}
        </option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "CommentSort",
    emits: ["sortBy"],
    data() {
        return {
            selectedValue: "Latest",
            selectedOptions: ["Latest", "Oldest"],
        };
    },
    methods: {
        sortBy() {
            this.$emit("sortBy", this.selectedValue);
        },
    },
});
</script>

<style scoped></style>
