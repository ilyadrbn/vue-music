<template>
    <div class="col-span-2">
        <div
            class="relative flex flex-col rounded border border-gray-200 bg-white"
        >
            <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
                <span class="card-title">My Songs</span>
                <i
                    class="fa fa-compact-disc float-right text-2xl text-green-400"
                ></i>
            </div>
            <div class="p-6">
                <!-- Composition Items -->
                <EditBlock />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditBlock from "../components/EditBlock.vue";

export default defineComponent({
    name: "ManageEdit",
    components: {
        EditBlock,
    },
});
</script>
