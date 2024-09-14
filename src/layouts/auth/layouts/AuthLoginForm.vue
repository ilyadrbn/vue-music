<template>
    <auth-form @submit="logi">
        <AuthInput
            name="email"
            type="text"
            placeholder="Enter Email"
            label="Email"
            :bails="false"
        />

        <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            label="Enter password"
            autocomplete="on"
            :bails="false"
        />

        <auth-btn type="submit" :disabled="popupStore.isLoaderOpen">
            Login
        </auth-btn>
    </auth-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePopupStore } from "@/stores/popup-store";
import type { ISigninValidationSchema } from "@/interfaces/auth-interfaces";

import AuthForm from "@/components/AppForm.vue";
import AuthInput from "../components/AuthInput.vue";
import AuthBtn from "@/components/AppBtn.vue";

export default defineComponent({
    name: "AuthLoginForm",
    components: {
        AuthForm,
        AuthInput,
        AuthBtn,
    },
    data() {
        return {
            popupStore: usePopupStore(),
        };
    },
    methods: {
        logi(values: ISigninValidationSchema): void {
            console.log(values);
            // this.popupStore.isLoaderOpen = true;
        },
    },
});
</script>
