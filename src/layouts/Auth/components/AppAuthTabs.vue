<template>
    <ul class="mb-4 flex flex-wrap">
        <li
            v-for="(val, title) in formatData"
            :key="title"
            class="flex-auto text-center"
        >
            <a
                class="block rounded px-4 py-3 transition"
                :class="{
                    'bg-blue-700 text-white hover:text-white': val,
                }"
                href="#"
                @click="switchTab(val)"
            >
                {{ title }}
            </a>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { IAuthMethod } from "@/interfaces/authInterfaces";

export default defineComponent({
    name: "AppAuthTabs",
    props: {
        authMethods: {
            type: Object as () => IAuthMethod,
            required: true,
        },
    },
    emits: ["switch-tab"],
    computed: {
        formatData() {
            const { signIn: Login, signUp: Register } = this.authMethods;
            return {
                Login,
                Register,
            };
        },
    },
    methods: {
        switchTab(val: boolean) {
            if (!val) {
                this.$emit("switch-tab");
            }
        },
    },
});
</script>

<style scoped></style>
