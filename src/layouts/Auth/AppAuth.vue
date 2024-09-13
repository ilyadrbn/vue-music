<template>
    <div
        id="modal"
        class="fixed inset-0 z-10 overflow-y-auto"
        :class="modalStore.hiddenClass"
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

                    <!-- ? Login Form -->
                    <app-auth-form v-if="authMethods.signIn">
                        <!-- <AppAuthInput name="email" /> -->
                        <!-- <AppAuthInput type="email" />
                        <AppAuthInput type="password" /> -->

                        <!-- <AppAuthBtn type="submit" /> -->
                    </app-auth-form>

                    <!-- ? Registration Form -->
                    <app-auth-form v-else :validation-schema="signUpSchema">
                        <AppAuthInput
                            name="name"
                            type="text"
                            placeholder="Enter Name"
                            label="Name *"
                        />

                        <AppAuthInput
                            name="email"
                            type="text"
                            placeholder="Enter Email"
                            label="Email *"
                        />

                        <AppAuthInput
                            name="age"
                            type="number"
                            placeholder="Enter Age"
                            label="Age *"
                        />

                        <AppAuthInput
                            name="password"
                            type="password"
                            placeholder="Password"
                            label="Enter password *"
                        />

                        <AppAuthInput
                            name="confirm_password"
                            type="password"
                            placeholder="Password"
                            label="Confirm password *"
                        />

                        <AppAuthInput
                            as="select"
                            name="country"
                            label="Country"
                            :countries
                        />

                        <AppAuthInput
                            name="tos"
                            type="checkbox"
                            placeholder="Password"
                            label="Accept terms of service *"
                            :value="1"
                        />

                        <!--<AppAuthBtn type="submit" /> -->
                    </app-auth-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { IAuthMethod } from "@/interfaces/auth-interfaces";
import ValidationShema from "./validation-schema";

import AppAuthTabs from "@/layouts/Auth/components/AppAuthTabs.vue";
import AppAuthForm from "./components/AppAuthForm.vue";
import AppAuthInput from "@/layouts/Auth/components/AppAuthInput.vue";
import { useModalStore } from "@/stores/modal-store";

export default defineComponent({
    name: "AppAuth",
    components: {
        AppAuthForm,
        AppAuthTabs,
        AppAuthInput,
    },
    data() {
        return {
            modalStore: useModalStore(),
            countries: [
                "",
                "USA",
                "Mexico",
                "Germany",
                "Spain",
                "France",
                "Japan",
                "China",
            ] as string[],
            authMethods: {
                signIn: true,
                signUp: false,
            } as IAuthMethod,
            signUpSchema: new ValidationShema(),
        };
    },
    mounted() {
        console.log(this.signUpSchema.age);
    },
    methods: {
        changeAuthMethod(): void {
            this.authMethods.signIn = !this.authMethods.signIn;
            this.authMethods.signUp = !this.authMethods.signUp;
        },
        closeAuthModal(): void {
            this.modalStore.isModalOpen = false;
        },
    },
});
</script>
