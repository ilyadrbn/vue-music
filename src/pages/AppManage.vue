<template>
    <!-- Main Content -->
    <section class="container mx-auto mt-6">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <ManageUpload />
            <ManageEdit />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ManageUpload from "./ManagePage/layouts/ManageUpload.vue";
import ManageEdit from "./ManagePage/layouts/ManageEdit.vue";

export default defineComponent({
    name: "AppManage",
    components: {
        ManageUpload,
        ManageEdit,
    },
    data() {
        return {
            loadedFiles: [] as string[],
        };
    },
    // methods: {
    //     getUploadedFiles(files: { [key: string]: number }): void {
    //         this.loadedFiles = Object.keys(files);
    //         console.log(this.loadedFiles);
    //     },
    // },
});
</script>
