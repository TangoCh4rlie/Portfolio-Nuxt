<script setup lang="ts">
import type { Language } from "~/types/language";
const props = defineProps<{
    language: Language;
}>();
</script>

<template>
    <div
        class="w-44 h-48 m-2 p-4 border dark:border-gray-600 rounded-xl dark:bg-zinc-900 bg-zinc-100 flex flex-col items-center justify-center dark:text-gray-400"
    >
        <svg v-if="language.img.path == null" class="w-20 h-20" viewBox="0 0 128 128">
            <path :fill="language.img.fill" :d="language.img.d"></path>
        </svg>
        <NuxtImg
            v-else
            :src="language.img.path"
            :alt="language.name"
            width="50"
            height="50"
        />
        <p class="mt-6">{{ language.name }}</p>
    </div>
</template>

<style scoped></style>
