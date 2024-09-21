<template>
    <div
        id="modal"
        class="fixed inset-0 z-10 overflow-y-auto"
        :class="popupStore.hiddenClass(popupStore.isModalOpen)"
    >
        <div
            class="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"
        >
            <div class="fixed inset-0 transition-opacity">
                <div
                    class="modal-close absolute inset-0 bg-gray-800 opacity-75"
                    @click.stop="closeAuthModal"
                ></div>
            </div>
            <span class="hidden sm:inline-block sm:h-screen sm:align-middle"
                >&#8203;</span
            >

            <div
                class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
            >
                <div class="px-6 py-4 text-left">
                    <div class="flex items-center justify-between pb-4">
                        <p class="text-2xl font-bold">Your Account</p>
                        <div
                            class="modal-close z-50 cursor-pointer"
                            @click.stop="closeAuthModal"
                        >
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <AuthTabs :auth-methods @switch-tab="changeAuthMethod" />
                    <AuthLoginForm
                        v-if="authMethods.signIn"
                        :validation-schema="signinValidationSchema"
                    />
                    <AuthRegisterForm
                        v-else
                        :validation-schema="signupValidationSchema"
                    />
                    <AuthGoogleButton />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/* *--------------------- plugins ------------------------ */
import { defineComponent } from "vue";
import { usePopupStore } from "@/stores/popup-store";
import type { IAuthMethod } from "@/types/auth-types";

/* *--------------------- helpers ------------------------ */
import {
    SignupValidationSchema,
    SigninValidationSchema,
} from "@/helpers/auth-validation-schemas";

/* *--------------------- components ------------------------ */
import AuthTabs from "@/components/AuthTabs.vue";
import AuthGoogleButton from "@/components/AuthGoogleButton.vue";
import AuthLoginForm from "./AuthLoginForm.vue";
import AuthRegisterForm from "./AuthRegisterForm.vue";

export default defineComponent({
    name: "AppAuth",
    components: {
        AuthTabs,
        AuthGoogleButton,
        AuthLoginForm,
        AuthRegisterForm,
    },
    data() {
        return {
            popupStore: usePopupStore(),
            authMethods: {
                signIn: true,
                signUp: false,
            } as IAuthMethod,
            signupValidationSchema: new SignupValidationSchema(),
            signinValidationSchema: new SigninValidationSchema(),
        };
    },
    methods: {
        changeAuthMethod(): void {
            this.authMethods.signIn = !this.authMethods.signIn;
            this.authMethods.signUp = !this.authMethods.signUp;
        },
        closeAuthModal(): void {
            this.popupStore.isModalOpen = false;
        },
    },
});
</script>
