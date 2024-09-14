<template>
    <app-auth-form @submit="login">
        <AppAuthInput
            name="email"
            type="text"
            placeholder="Enter Email"
            label="Email"
            :bails="false"
        />

        <AppAuthInput
            name="password"
            type="password"
            placeholder="Password"
            label="Enter password"
            autocomplete="on"
            :bails="false"
        />

        <app-auth-btn type="submit" :disabled="popupStore.isLoaderOpen">
            Login
        </app-auth-btn>
    </app-auth-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePopupStore } from "@/stores/popupStore";

import AppAuthForm from "@/components/AppVeeForm.vue";
import AppAuthInput from "../components/AppAuthInput.vue";
import AppAuthBtn from "@/components/AppBtn.vue";

export default defineComponent({
    name: "AppAuthLoginForm",
    components: {
        AppAuthForm,
        AppAuthInput,
        AppAuthBtn,
    },
    data() {
        return {
            popupStore: usePopupStore(),
        };
    },
    methods: {
        login(): void {
            this.popupStore.isLoaderOpen = true;
        },
    },
});
</script>
