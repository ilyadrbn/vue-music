<template>
    <div class="mb-3">
        <label class="mb-2 inline-block">Country</label>
        <select
            class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        >
            <option
                v-for="option in selectOptions"
                :key="option"
                :value="option"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthSelect",
    props: {
        selectOptions: {
            type: Array<string>,
            required: true,
        },
    },
});
</script>
