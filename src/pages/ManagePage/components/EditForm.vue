<template>
    <vee-form>
        <VeeInput
            name="song-title"
            type="text"
            placeholder="Enter Title"
            label="Song Title"
            :bails="false"
        />
        <VeeInput
            name="genre"
            type="text"
            placeholder="Enter Genre"
            label="Genre"
            :bails="false"
        />
        <button
            type="submit"
            class="rounded bg-green-600 px-3 py-1.5 text-white"
        >
            Submit
        </button>
        <button
            type="button"
            class="rounded bg-gray-600 px-3 py-1.5 text-white"
        >
            Go Back
        </button>
    </vee-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import VeeForm from "@/components/AppForm.vue";
import VeeInput from "@/components/AppInput.vue";

export default defineComponent({
    name: "EditForm1",
    components: {
        VeeForm,
        VeeInput,
    },
});
</script>
