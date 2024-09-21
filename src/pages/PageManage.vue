<template>
    <!-- Main Content -->
    <section class="container mx-auto mt-6">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <UploadForm />
            <ManageForm />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* *--------------------- components ------------------------ */
import UploadForm from "@/layouts/UploadForm.vue";
import ManageForm from "@/layouts/ManageForm.vue";

export default defineComponent({
    name: "ManagePage",
    components: {
        UploadForm,
        ManageForm,
    },
    data() {
        return {
            loadedFiles: [] as string[],
        };
    },
});
</script>
