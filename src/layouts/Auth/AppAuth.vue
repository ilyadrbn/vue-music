<template>
    <div id="modal" class="fixed inset-0 z-10 overflow-y-auto">
        <!-- :class="modalStore.hiddenClass" -->
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
                    <app-auth-form
                        v-if="authMethods.signUp"
                        :validation-schema="signUpValidationSchema"
                        @submit="register"
                    >
                        <AppAuthInput
                            name="name"
                            type="text"
                            placeholder="Enter Name"
                            label="Name *"
                            :bails="false"
                        />

                        <AppAuthInput
                            name="email"
                            type="text"
                            placeholder="Enter Email"
                            label="Email *"
                            :bails="false"
                        />

                        <AppAuthInput
                            name="age"
                            type="number"
                            placeholder="Enter Age"
                            label="Age *"
                            :bails="false"
                        />

                        <AppAuthInput
                            name="password"
                            type="password"
                            placeholder="Password"
                            label="Enter password *"
                            autocomplete="password"
                            :bails="false"
                        />

                        <AppAuthInput
                            name="confirm_password"
                            type="password"
                            placeholder="Password"
                            label="Confirm password *"
                            autocomplete="password"
                            :bails="false"
                        />

                        <AppAuthSelect
                            as="select"
                            name="country"
                            label="Country"
                            :countries
                        />

                        <AppAuthCheckbox
                            name="tos"
                            type="checkbox"
                            label="Accept Terms of Service *"
                            :bails="false"
                        />

                        <AppAuthBtn
                            type="submit"
                            :class="{
                                'pointer-events-none opacity-50':
                                    regInSubmission,
                            }"
                            :disabled="regInSubmission"
                        />
                    </app-auth-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModalStore } from "@/stores/modalStore";
import type { IAuthMethod } from "@/interfaces/authInterfaces";
import SignupValidationSchema from "./signupValidationSchema";

import AppAuthTabs from "./components/AppAuthTabs.vue";
import AppAuthForm from "./components/AppAuthForm.vue";
import AppAuthInput from "./components/AppAuthInput.vue";
import AppAuthSelect from "./components/AppAuthSelect.vue";
import AppAuthCheckbox from "./components/AppAuthCheckbox.vue";
import AppAuthBtn from "./components/AppAuthBtn.vue";
import AppAuthRegAlert from "./components/AppAuthRegAlert.vue";

export default defineComponent({
    name: "AppAuth",
    components: {
        AppAuthTabs,
        AppAuthForm,
        AppAuthInput,
        AppAuthSelect,
        AppAuthCheckbox,
        AppAuthBtn,
        AppAuthRegAlert,
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
            signUpValidationSchema: new SignupValidationSchema(),
            regInSubmission: false as boolean,
            regShowAlert: false as boolean,
            regAlertMsg:
                "Please wait! Your account is being created." as string,
        };
    },
    methods: {
        changeAuthMethod(): void {
            this.authMethods.signIn = !this.authMethods.signIn;
            this.authMethods.signUp = !this.authMethods.signUp;
        },
        closeAuthModal(): void {
            this.modalStore.isModalOpen = false;
        },
        // ? встроенная функция в VeeValidate
        register(): void {
            this.regInSubmission = true;
            this.regShowAlert = true;

            setTimeout(() => {}, 3000);
        },
    },
});
</script>
