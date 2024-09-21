<template>
    <div
        id="loader"
        class="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-slate-600 opacity-90"
        :class="hiddenClass"
    >
        <div class="spinner"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- stores ------------------------ */
import { usePopupStore } from "@/stores/popup-store";

export default defineComponent({
    name: "AppLoader",
    data() {
        return {
            popupStore: usePopupStore(),
        };
    },
    computed: {
        hiddenClass(): string {
            return this.popupStore.hiddenClass(this.popupStore.isLoaderOpen);
        },
    },
});
</script>

<style lang="scss" scoped>
.spinner {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid #0000;
    border-right-color: blue;
    animation: l24 1s infinite linear;
    &:before,
    &:after {
        content: "";
        position: absolute;
        inset: -8px;
        border-radius: 50%;
        border: inherit;
        animation: inherit;
        animation-duration: 2s;
    }
    &:after {
        animation-duration: 4s;
    }
}
@keyframes l24 {
    100% {
        transform: rotate(1turn);
    }
}
</style>
