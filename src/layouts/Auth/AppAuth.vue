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

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:h-screen sm:align-middle"
                >&#8203;</span
            >

            <div
                class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
            >
                <!-- Add margin if you want to see some of the overlay behind the modal-->
                <div class="px-6 py-4 text-left">
                    <!--Title-->
                    <div class="flex items-center justify-between pb-4">
                        <p class="text-2xl font-bold">Your Account</p>
                        <!-- Modal Close Button -->
                        <div
                            class="modal-close z-50 cursor-pointer"
                            @click.stop="closeAuthModal"
                        >
                            <i class="fas fa-times"></i>
                        </div>
                    </div>

                    <AppAuthTabs :auth-methods @switch-tab="changeAuthMethod" />

                    <AppAuthLoginForm
                        v-if="authMethods.signIn"
                        :validation-schema="authValidationSchema"
                    />
                    <AppAuthRegisterForm
                        v-else
                        :validation-schema="authValidationSchema"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePopupStore } from "@/stores/popupStore";
import type { IAuthMethod } from "@/interfaces/authInterfaces";
import AuthValidationSchema from "./authValidationSchema";

import AppAuthTabs from "./components/AppAuthTabs.vue";
import AppAuthLoginForm from "./layouts/AppAuthLoginForm.vue";
import AppAuthRegisterForm from "./layouts/AppAuthRegisterForm.vue";

export default defineComponent({
    name: "AppAuth",
    components: {
        AppAuthTabs,
        AppAuthLoginForm,
        AppAuthRegisterForm,
    },
    data() {
        return {
            popupStore: usePopupStore(),
            authMethods: {
                signIn: true,
                signUp: false,
            } as IAuthMethod,
            authValidationSchema: new AuthValidationSchema(),
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
