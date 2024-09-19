<template>
    <auth-form @submit="login">
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
import { useUserStore } from "@/stores/user-store";
import type { ISigninFormData } from "@/interfaces/auth-interfaces";

import AuthForm from "@/components/AppForm.vue";
import AuthInput from "../../../components/AppInput.vue";
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
            userStore: useUserStore(),
        };
    },
    methods: {
        async login(values: ISigninFormData): Promise<void> {
            this.popupStore.isLoaderOpen = true;
            try {
                await this.userStore.loginUser(values);

                this.popupStore.showMessage(
                    "Success",
                    "Logged in successfully.",
                    "Success",
                );
                this.popupStore.isModalOpen = false;
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error);
                }
                this.popupStore.showMessage(
                    "Error",
                    "Login failed. Please try again.",
                    "Error",
                );
            } finally {
                this.popupStore.isLoaderOpen = false;
            }
        },
    },
});
</script>
