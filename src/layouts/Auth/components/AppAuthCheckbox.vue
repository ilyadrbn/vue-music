<template>
    <div class="mb-3">
        <label class="mb-2 inline-block select-none" :for="name">{{ labelText }}</label>
        <vee-field v-slot="{ field, errors }" :name="name" :bails="bails">
            <input
                :id="name"
                class="float-left mr-4 mt-1 h-4 w-4 rounded"
                :type="type"
                v-bind="field"
                :value="isChecked"
                @click="changeCheckbox"
            />
            <p v-for="error in errors" :key="error" class="text-red-600">
                {{ error }}
            </p>
        </vee-field>
    </div>
</template>

<script lang="ts">
import type { IAuthValidationSchema } from "@/interfaces/authInterfaces";
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthCheckbox",
    props: {
        name: {
            type: String as () => keyof IAuthValidationSchema,
            required: true,
        },
        type: {
            type: String,
            required: false,
            default: "checkbox",
        },
        label: {
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
    data: function () {
        return {
            isChecked: false,
        };
    },
    computed: {
        labelText(): string {
            return (
                this.label ??
                this.name.charAt(0).toUpperCase() + this.name.slice(1)
            );
        },
    },
    methods: {
        changeCheckbox(): void {
            this.isChecked = !this.isChecked;
        },
    },
});
</script>

<style scoped></style>
