import { defineStore } from "pinia";

interface IModalStore {
    isModalOpen: boolean;
}

const useModalStore = defineStore("modalStore", {
    state(): IModalStore {
        return {
            isModalOpen: false as boolean,
        };
    },
    getters: {
        hiddenClass({ isModalOpen }) {
            return !isModalOpen ? "hidden" : "";
        },
    },
    // actions: {},
});

export { useModalStore, type IModalStore };
