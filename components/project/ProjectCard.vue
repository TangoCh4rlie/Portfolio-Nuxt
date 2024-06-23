<script setup lang="ts">
const props = defineProps<{
    project: Project;
}>();
</script>

<template>
    <div class="relative">
        <div class="flex">
            <NuxtImg
                class="w-1/2 m-8 border dark:border-gray-600 rounded-xl"
                :src="project.img.path"
                :alt="project.title"
                width="1080"
                height="720"
            />
            <div class="w-1/2 m-8">
                <h3>{{ project.title }}</h3>
            </div>
        </div>
        <div class="flex flex-col w-full h-full justify-center place-content-around absolute">
            <div class="border dark:border-gray-600 rounded-xl dark:bg-zinc-900">
                <p>test</p>
            </div>
            <div class="border dark:border-gray-600 rounded-xl dark:bg-zinc-900">
                <p>test</p>
            </div>
        </div>
    </div>
</template>
