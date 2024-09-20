<template>
    <div class="mb-4 rounded border border-gray-200 p-3">
        <div>
            <h4 class="inline-block text-2xl font-bold">{{ fileInfo.name }}</h4>
            <button
                class="float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white"
            >
                <i class="fa fa-times"></i>
            </button>
            <button
                class="float-right ml-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                @click.prevent="isHidden = !isHidden"
            >
                <i class="fa fa-pencil-alt"></i>
            </button>
        </div>
        <div v-show="!isHidden">
            <ManageEditForm :validation-schema="manageValidationSchema" :file-info="fileInfo.id"/>
            <!-- <button
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
                </button> -->
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ManageValidationSchema } from "../validation-schemas";

import ManageEditForm from "./EditForm.vue";

export default defineComponent({
    name: "EditBlock",
    components: {
        ManageEditForm,
    },
    props: {
        fileInfo: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isHidden: true as boolean,
            manageValidationSchema: new ManageValidationSchema(),
        };
    },
});
</script>
