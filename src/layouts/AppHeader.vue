<template>
    <header id="header" class="bg-gray-700">
        <nav class="container mx-6 flex items-center justify-start px-4 py-5">
            <!-- App Name -->
            <router-link
                :to="{ path: 'Home' }"
                class="mr-4 text-2xl font-bold uppercase text-white"
            >
                Music
            </router-link>

            <div class="flex flex-grow items-center">
                <!-- Primary Navigation -->
                <ul class="mt-1 flex flex-row">
                    <!-- Navigation Links -->
                    <li v-if="!userStore.userLoggedIn">
                        <a
                            class="px-2 text-white"
                            href="#"
                            @click.prevent="openAuthModal"
                            >Login / Register</a
                        >
                    </li>
                    <template v-else>
                        <li>
                            <router-link
                                :to="{ name: 'Manage' }"
                                class="px-2 text-white"
                                >Manage</router-link
                            >
                        </li>
                        <li>
                            <a
                                class="px-2 text-white"
                                href="#"
                                @click.prevent="signOut"
                                >Log Out</a
                            >
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePopupStore } from "@/stores/popup-store";
import { useUserStore } from "@/stores/user-store";

export default defineComponent({
    name: "AppHeader",
    data() {
        return {
            popupStore: usePopupStore(),
            userStore: useUserStore(),
        };
    },
    methods: {
        openAuthModal() {
            this.popupStore.$state.isModalOpen =
                !this.popupStore.$state.isModalOpen;
        },
        signOut() {
            this.userStore.signOut();
            if (this.$route.meta.requiresAuth) {
                this.$router.push({ name: "Home" });
            }
        },
    },
});
</script>
