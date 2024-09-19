<template>
    <vee-form>
        <slot></slot>
    </vee-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppForm",
});
</script>
