<template>
    <button
        class="mt-4 block w-full rounded bg-purple-600 px-3 py-1.5 text-white transition hover:bg-purple-700"
        @click.prevent="signInWithGoogle"
    >
        Sign in with Google
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- stores ------------------------ */
import { useUserStore } from "@/stores/user-store";
import { usePopupStore } from "@/stores/popup-store";

export default defineComponent({
    name: "AuthGoogleServices",
    data() {
        return {
            userStore: useUserStore(),
            popupStore: usePopupStore(),
        };
    },
    methods: {
        async signInWithGoogle() {
            try {
                await this.userStore.googleAuth();

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
