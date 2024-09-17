<template>
    <ul class="mb-4 flex flex-wrap">
        <li
            v-for="(val, title) in renamedMethods"
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
import type { IAuthMethod } from "@/interfaces/auth-interfaces";

export default defineComponent({
    name: "AuthTabs",
    props: {
        authMethods: {
            type: Object as () => IAuthMethod,
            required: true,
        },
    },
    emits: ["switch-tab"],
    computed: {
        renamedMethods() {
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
