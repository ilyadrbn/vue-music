import { defineStore } from "pinia";

interface IPopupStore {
    isModalOpen: boolean;
    isLoaderOpen: boolean;
    isMsgInfoOpen: boolean;
    msgInfo: string;
}

const usePopupStore = defineStore("popupStore", {
    state(): IPopupStore {
        return {
            isModalOpen: false as boolean,
            isLoaderOpen: false as boolean,
            isMsgInfoOpen: false as boolean,
            msgInfo: "" as string,
        };
    },
    actions: {
        hiddenClass(popupNameStatus: boolean): string {
            return !popupNameStatus ? "hidden" : "";
        },
    },
});

export { usePopupStore, type IPopupStore };
