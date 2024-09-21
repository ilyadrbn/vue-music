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
        <edit-btn
            type="submit"
            class="mb-2 w-1/4"
            :disabled="popupStore.isLoaderOpen"
        >
            Submit
        </edit-btn>
        <edit-btn
            type="button"
            class="w-1/4 bg-slate-700 hover:bg-slate-500"
            @click.prevent="close"
        >
            Go back
        </edit-btn>
    </edit-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *------------------- plugins ------------------------- */
import { db, doc, updateDoc } from "@/plugins/firebase-firestore";

/* *--------------------- stores ------------------------ */
import { usePopupStore } from "@/stores/popup-store";

/* *--------------------- types ------------------------ */
import type { IManageValidationSchema } from "@/types/manage-types";

/* *------------------- components -------------------- */
import EditForm from "@/components/AppForm.vue";
import EditInput from "@/components/AppInput.vue";
import EditBtn from "@/components/AppButton.vue";

export default defineComponent({
    name: "EditForm1",
    components: {
        EditForm,
        EditInput,
        EditBtn,
    },
    props: {
        fileInfo: {
            type: Object,
            required: true,
        },
    },
    emits: ["close-form"],
    data() {
        return {
            popupStore: usePopupStore(),
        };
    },
    methods: {
        async edit(values: IManageValidationSchema): Promise<void> {
            this.popupStore.isLoaderOpen = true;
            try {
                await updateDoc(doc(db, "songs", this.fileInfo.id), {
                    name: values.edited_name,
                    genre: values.genre,
                });
                this.popupStore.showMessage(
                    "Success",
                    "Edited successfully.",
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
        close(): void {
            this.$emit("close-form");
        },
    },
});
</script>
