<script setup lang="ts">
const props = defineProps<{
    language: Language;
}>();
</script>

<template>
    <div
        class="w-44 h-48 m-2 p-4 border border-gray-600 rounded-lg bg-zinc-900 flex flex-col items-center justify-center text-gray-400"
    >
        <svg class="w-20 h-20" viewBox="0 0 128 128">
            <path :fill="language.img.fill" :d="language.img.d"></path>
        </svg>
        <p>{{ language.name }}</p>
    </div>
</template>

<style scoped></style>
