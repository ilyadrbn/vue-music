<template>
    <edit-form @submit="edit">
        <EditInput
            name="edited_name"
            type="text"
            placeholder="Enter Title"
            label="Song Title"
            :bails="false"
        />
        <EditInput
            name="genre"
            type="text"
            placeholder="Enter Genre"
            label="Genre"
            :bails="false"
        />
        <edit-btn type="submit" class="mb-2 w-1/4"> Submit </edit-btn>
        <edit-btn
            type="button"
            class="w-1/4 bg-slate-700 hover:bg-slate-500"
            @click.prevent
        >
            Go back
        </edit-btn>
    </edit-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import EditForm from "@/components/AppForm.vue";
import EditInput from "@/components/AppInput.vue";
import EditBtn from "@/components/AppBtn.vue";

export default defineComponent({
    name: "EditForm1",
    components: {
        EditForm,
        EditInput,
        EditBtn,
    },
    props: {
        fileInfo: {
            type: String,
            required: true,
        },
    },
    methods: {
        edit(): void {
            console.log("submitted");
        },
    },
});
</script>
