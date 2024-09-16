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

                this.popupStore.msgInfo = {
                    title: "Success",
                    text: "Logged in successfully",
                    type: "Success",
                };
                this.popupStore.isModalOpen = false;
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error);
                }
            } finally {
                this.popupStore.isLoaderOpen = false;
                this.popupStore.isMsgInfoOpen = true;
                setTimeout(() => {
                    this.popupStore.isMsgInfoOpen = false;
                }, 3000);
            }
        },
    },
});
</script>

<style scoped></style>
