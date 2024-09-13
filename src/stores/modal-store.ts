import { defineStore } from "pinia";

interface IModalStore {
    isModalOpen: boolean;
}

const useModalStore = defineStore("modalStore", {
    // ! аналог data
    state(): IModalStore {
        return {
            isModalOpen: false as boolean,
        };
    },
    // ! аналог computed
    getters: {
        hiddenClass({ isModalOpen }) {
            return !isModalOpen ? "hidden" : "";
        },
    },
    // ! аналог methods
    // actions: {},
});

export { useModalStore, type IModalStore };
