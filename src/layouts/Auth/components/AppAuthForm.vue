<template>
    <form>
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthForm",
});
</script>
