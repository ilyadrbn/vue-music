<template>
    <section class="relative mb-8 py-20 text-center text-white">
        <div
            class="introduction-bg absolute inset-0 h-full w-full bg-contain"
            style="background-image: url(/public/assets/img/header.png)"
        ></div>
        <div class="container mx-auto">
            <div class="main-header-content text-white">
                <h1 class="mb-5 text-5xl font-bold">Listen to Great Music!</h1>
                <p class="mx-auto w-full md:w-8/12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus et dolor mollis, congue augue non, venenatis elit.
                    Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et
                    sapien. Duis sed magna pulvinar, fringilla lorem eget,
                    ullamcorper urna.
                </p>
            </div>
        </div>

        <img
            class="relative mx-auto -mb-20 mt-5 block w-auto max-w-full"
            src="/public/assets/img/introduction-music.png"
        />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "HomeHeader",
});
</script>
