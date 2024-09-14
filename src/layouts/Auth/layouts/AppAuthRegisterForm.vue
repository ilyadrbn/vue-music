<template>
    <app-auth-form @submit="register">
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
            autocomplete="on"
            :bails="false"
        />

        <AppAuthInput
            name="confirm_password"
            type="password"
            placeholder="Password"
            label="Confirm password *"
            autocomplete="on"
            :bails="false"
        />

        <AppAuthSelect as="select" name="country" label="Country" :countries />

        <AppAuthCheckbox
            name="tos"
            type="checkbox"
            label="Accept Terms of Service *"
            :bails="false"
        />

        <app-auth-btn type="submit" :disabled="popupStore.isLoaderOpen">
            Register
        </app-auth-btn>
    </app-auth-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePopupStore } from "@/stores/popupStore";

import AppAuthForm from "@/components/AppVeeForm.vue";
import AppAuthInput from "../components/AppAuthInput.vue";
import AppAuthSelect from "../components/AppAuthSelect.vue";
import AppAuthCheckbox from "../components/AppAuthCheckbox.vue";
import AppAuthBtn from "@/components/AppBtn.vue";

export default defineComponent({
    name: "AppAuthRegisterForm",
    components: {
        AppAuthForm,
        AppAuthInput,
        AppAuthBtn,
        AppAuthSelect,
        AppAuthCheckbox,
    },
    data() {
        return {
            popupStore: usePopupStore(),
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
        register(): void {
            this.popupStore.isLoaderOpen = true;
        },
    },
});
</script>
