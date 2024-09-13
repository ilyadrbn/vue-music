import { defineStore } from "pinia";

interface IAuthStore {
    isModalOpen: boolean;
}

const useAuthStore = defineStore("authStore", {
    // ! аналог data
    state(): IAuthStore {
        return {
            isModalOpen: false as boolean,
        };
    },
    // ! аналог computed
    getters: {
        hiddenAuthClass({ isModalOpen }) {
            return !isModalOpen ? "hidden" : "";
        },
    },
    // ! аналог methods
    // actions: {},
});

export { useAuthStore, type IAuthStore };
