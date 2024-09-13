<template>
    <!-- class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none" -->
    <div class="mb-3">
        <label class="mb-2 inline-block" :for="name">{{ labelText }}</label>
        <vee-field
            v-if="!countries"
            :id="name"
            :class="
                type !== 'checkbox'
                    ? 'block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none'
                    : 'float-left mr-5 mt-1 h-4 w-4 rounded'
            "
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :value="value"
        >
        </vee-field>
        <vee-field
            v-else
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
        <VeeError class="absolute right-5 text-red-600" :name="name" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthInput",
    props: {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: false,
            default: null,
        },
        placeholder: {
            type: String,
            required: false,
            default: null,
        },
        label: {
            type: String,
            required: false,
            default: null,
        },
        as: {
            type: String,
            required: false,
            default: null,
        },
        countries: {
            type: Array<string>,
            required: false,
            default: null,
        },
        value: {
            type: Number,
            required: false,
            default: null,
        },
    },
    computed: {
        labelText(): string {
            return (
                this.label ??
                this.name.charAt(0).toUpperCase() + this.name.slice(1)
            );
        },
    },
});
</script>
