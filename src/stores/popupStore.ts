import { defineStore } from "pinia";

interface IPopupStore {
    isModalOpen: boolean;
    isLoaderOpen: boolean;
}

const usePopupStore = defineStore("popupStore", {
    state(): IPopupStore {
        return {
            isModalOpen: false as boolean,
            isLoaderOpen: false as boolean,
        };
    },
    actions: {
        hiddenClass(popupNameStatus: boolean): string {
            return !popupNameStatus ? "hidden" : "";
        },
    },
});

export { usePopupStore, type IPopupStore };
