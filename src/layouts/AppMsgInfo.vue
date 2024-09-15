<template>
    <div
        id="msg-info"
        class="fixed right-6 top-[calc(100vh-20%)] rounded bg-white p-5 pl-8 pr-8 shadow-lg shadow-gray-300"
        :class="hiddenClass"
    >
        <p class="msg">
            {{ popupStore.msgInfo }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
