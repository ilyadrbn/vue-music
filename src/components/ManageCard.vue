<template>
    <div class="mb-4 rounded border border-gray-200 p-3">
        <div>
            <h4 class="inline-block text-2xl font-bold">
                {{ fileInfo.artist }} - {{ fileInfo.name }}
            </h4>
            <button
                class="float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white"
                @click.prevent="remove"
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
            <ManageFields
                :validation-schema="manageValidationSchema"
                :file-info="fileInfo"
                @close-form="isHidden = true"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- plugins ------------------------ */
import { db, doc, deleteDoc } from "@/plugins/firebase-firestore";

/* *--------------------- stores ------------------------ */
import { usePopupStore } from "@/stores/popup-store";

/* *--------------------- helpers ------------------------ */
import { ManageValidationSchema } from "@/helpers/manage-validation-schemas";

/* *--------------------- components ------------------------ */
import ManageFields from "./ManageFields.vue";

export default defineComponent({
    name: "EditBlock",
    components: {
        ManageFields,
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
            popupStore: usePopupStore(),
            manageValidationSchema: new ManageValidationSchema(),
        };
    },
    methods: {
        async remove() {
            this.popupStore.isLoaderOpen = true;
            try {
                await deleteDoc(doc(db, "songs", this.fileInfo.id));
                this.popupStore.showMessage(
                    "Success",
                    "Remove successfully.",
                    "Success",
                );
            } catch (error) {
                if (error instanceof Error) {
                    this.popupStore.showMessage(
                        "Error",
                        error.message,
                        "Error",
                    );
                }
            } finally {
                this.popupStore.isLoaderOpen = false;
            }
        },
    },
});
</script>
