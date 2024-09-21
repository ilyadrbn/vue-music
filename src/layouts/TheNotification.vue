<template>
    <div
        id="msg-info"
        class="fixed right-6 top-[calc(100vh-20%)] z-50 rounded bg-white p-5 pl-8 pr-8 shadow-lg shadow-gray-300"
        :class="[
            hiddenClass,
            popupStore.msgInfo.type === 'Success'
                ? 'text-green-600'
                : 'text-red-600',
        ]"
    >
        <p class="title">{{ popupStore.msgInfo.title }}</p>
        <p class="msg">{{ popupStore.msgInfo.text }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- stores ------------------------ */
import { usePopupStore } from "@/stores/popup-store";

export default defineComponent({
    name: "AppMsgInfo",
    data() {
        return {
            popupStore: usePopupStore(),
        };
    },
    computed: {
        hiddenClass(): string {
            return this.popupStore.hiddenClass(this.popupStore.isMsgInfoOpen);
        },
    },
});
</script>
