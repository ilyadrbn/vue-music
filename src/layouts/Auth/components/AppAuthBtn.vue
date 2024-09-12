<template>
    <button
        :type="type"
        class="block w-full rounded bg-purple-600 px-3 py-1.5 text-white transition hover:bg-purple-700"
    >
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AppAuthBtn",
    props: {
        type: {
            type: String as () => "submit",
            required: true,
        },
    },
});
</script>
