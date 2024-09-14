<template>
    <div class="mb-3">
        <label class="mb-2 inline-block select-none" :for="name">{{
            labelText
        }}</label>
        <vee-field v-slot="{ field, errors }" :name="name" :bails="bails">
            <input
                :id="name"
                class="'block focus:outline-none' w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black"
                :placeholder="placeholder"
                :type="type"
                :autocomplete="autocomplete"
                v-bind="field"
            />
            <p v-for="error in errors" :key="error" class="text-red-600">
                {{ error }}
            </p>
        </vee-field>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type {
    IAuthValidationSchema,
    InputType,
} from "@/interfaces/authInterfaces";

export default defineComponent({
    name: "AppAuthInput",
    props: {
        name: {
            type: String as () => keyof IAuthValidationSchema,
            required: true,
        },
        type: {
            type: String as () => InputType,
            required: false,
            default: null,
            validator: (value: string) => {
                if (
                    ["text", "number", "password", "checkbox"].includes(value)
                ) {
                    return true;
                }
                throw new Error("Invalid input type");
            },
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
        autocomplete: {
            type: String,
            required: false,
            default: null,
        },
        bails: {
            type: Boolean,
            required: false,
            default: true,
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
