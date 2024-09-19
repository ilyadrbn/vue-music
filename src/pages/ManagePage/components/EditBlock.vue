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
            >
                <i class="fa fa-pencil-alt"></i>
            </button>
        </div>
        <div>
            <form>
                <div class="mb-3">
                    <label class="mb-2 inline-block">Song Title</label>
                    <input
                        type="text"
                        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                        placeholder="Enter Song Title"
                    />
                </div>
                <div class="mb-3">
                    <label class="mb-2 inline-block">Genre</label>
                    <input
                        type="text"
                        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                        placeholder="Enter Genre"
                    />
                </div>
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
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "EditBlock",
    props: {
        fileInfo: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style scoped></style>
