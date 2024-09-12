import { defineStore } from "pinia";

const useGlobalStore = defineStore("global", {
    state: () => ({
        count: 0,
    }),
});

export default useGlobalStore;
