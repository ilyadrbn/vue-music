<template>
    <form ref="form">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthForm",
});
</script>

<style lang="scss" scoped></style>
