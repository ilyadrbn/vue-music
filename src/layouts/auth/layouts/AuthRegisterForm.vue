<template>
    <auth-form @submit="register">
        <AuthInput
            name="name"
            type="text"
            placeholder="Enter Name"
            label="Name *"
            :bails="false"
        />

        <AuthInput
            name="email"
            type="text"
            placeholder="Enter Email"
            label="Email *"
            :bails="false"
        />

        <AuthInput
            name="age"
            type="number"
            placeholder="Enter Age"
            label="Age *"
            :bails="false"
        />

        <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            label="Enter password *"
            autocomplete="on"
            :bails="false"
        />

        <AuthInput
            name="confirm_password"
            type="password"
            placeholder="Password"
            label="Confirm password *"
            autocomplete="on"
            :bails="false"
        />

        <AuthSelect as="select" name="country" label="Country" :countries />

        <AuthCheckbox
            name="tos"
            type="checkbox"
            label="Accept Terms of Service *"
            :bails="false"
        />

        <auth-btn type="submit" :disabled="popupStore.isLoaderOpen">
            Register
        </auth-btn>
    </auth-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePopupStore } from "@/stores/popup-store";
import { useUserStore } from "@/stores/user-store";
import type { ISignupFormData } from "@/interfaces/auth-interfaces";

import AuthForm from "@/components/AppForm.vue";
import AuthInput from "../../../components/AppInput.vue";
import AuthSelect from "../components/AuthSelect.vue";
import AuthCheckbox from "../components/AuthCheckbox.vue";
import AuthBtn from "@/components/AppBtn.vue";

export default defineComponent({
    name: "AuthRegisterForm",
    components: {
        AuthForm,
        AuthInput,
        AuthBtn,
        AuthSelect,
        AuthCheckbox,
    },
    data() {
        return {
            popupStore: usePopupStore(),
            userStore: useUserStore(),
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
        };
    },
    methods: {
        async register(values: ISignupFormData): Promise<void> {
            this.popupStore.isLoaderOpen = true;
            try {
                await this.userStore.createUser(values);

                this.popupStore.showMessage(
                    "Success",
                    "Registered successfully.",
                    "Success",
                );
                this.popupStore.isModalOpen = false;
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error(error);
                }
                this.popupStore.showMessage(
                    "Error",
                    "Registration failed. Please try again.",
                    "Error",
                );
            } finally {
                this.popupStore.isLoaderOpen = false;
            }
        },
    },
});
</script>
