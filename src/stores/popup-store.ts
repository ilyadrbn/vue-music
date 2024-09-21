import { defineStore } from "pinia";

/* *--------------------- types ------------------------ */
interface IMsgInfo {
    title: string;
    text: string;
    type: string;
}
interface IPopupStore {
    isModalOpen: boolean;
    isLoaderOpen: boolean;
    isMsgInfoOpen: boolean;
    msgInfo: IMsgInfo;
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
        showMessage(title: string, text: string, type: string): void {
            this.msgInfo = {
                title: title,
                text: text,
                type: type,
            };
            this.isMsgInfoOpen = true;
            setTimeout(() => {
                this.isMsgInfoOpen = false;
            }, 3000);
        },
    },
});

export { usePopupStore, type IPopupStore };
