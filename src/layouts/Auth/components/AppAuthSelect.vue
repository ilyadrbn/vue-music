<template>
    <div class="mb-3">
        <label class="mb-2 inline-block" :for="name">{{ label }}</label>
        <vee-field
            class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
            :as="as"
            :name="name"
        >
            <option
                v-for="country in countries"
                :key="country"
                :value="country"
            >
                {{ country }}
            </option>
        </vee-field>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthSelect",
    props: {
        name: {
            type: String,
            required: true,
        },
        as: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: false,
            default: null,
        },
        countries: {
            type: Array<string>,
            required: false,
            default: null,
        },
    },
});
</script>
