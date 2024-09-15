import { defineStore } from "pinia";

interface IPopupStore {
    isModalOpen: boolean;
    isLoaderOpen: boolean;
    isMsgInfoOpen: boolean;
    msgInfo: {
        title: string;
        text: string;
        type: string;
    };
}

const usePopupStore = defineStore("popupStore", {
    state(): IPopupStore {
        return {
            isModalOpen: false as boolean,
            isLoaderOpen: false as boolean,
            isMsgInfoOpen: false as boolean,
            msgInfo: {
                title: "",
                text: "",
                type: "",
            },
        };
    },
    actions: {
        hiddenClass(popupNameStatus: boolean): string {
            return !popupNameStatus ? "hidden" : "";
        },
    },
});

export { usePopupStore, type IPopupStore };
