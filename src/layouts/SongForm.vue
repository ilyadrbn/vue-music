<template>
    <section class="container mx-auto mt-6">
        <div
            class="relative flex flex-col rounded border border-gray-200 bg-white"
        >
            <div class="border-b border-gray-200 px-6 pb-5 pt-6 font-bold">
                <!-- Comment Count -->
                <span class="card-title">Comments (15)</span>
                <i
                    class="fa fa-comments float-right text-2xl text-green-400"
                ></i>
            </div>
            <div class="p-6">
                <form>
                    <textarea
                        class="mb-4 block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                        placeholder="Your comment here..."
                    ></textarea>
                    <button
                        type="submit"
                        class="block rounded bg-green-600 px-3 py-1.5 text-white"
                    >
                        Submit
                    </button>
                </form>
                <!-- Sort Comments -->
                <select
                    class="mt-4 block rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                >
                    <option value="1">Latest</option>
                    <option value="2">Oldest</option>
                </select>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "SongForm",
});
</script>
