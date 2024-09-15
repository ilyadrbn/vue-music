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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { usePopupStore } from "@/stores/popup-store";
import type { ISigninFormData } from "@/interfaces/auth-interfaces";

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
        async login(values: ISigninFormData): Promise<void> {
            this.popupStore.isLoaderOpen = true;
            try {
                await signInWithEmailAndPassword(
                    getAuth(),
                    values.email,
                    values.password,
                );
                this.popupStore.msgInfo = "Logged successfully!";
            } catch (error) {
                if (error instanceof Error) {
                    console.table(error);
                }
                this.popupStore.msgInfo = "Login failed!";
            } finally {
                this.popupStore.isModalOpen = false;
                this.popupStore.isLoaderOpen = false;
                this.popupStore.isMsgInfoOpen = true;
            }
        },
    },
});
</script>
