<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <template #header>
        <p>Custom header content</p>
      </template>
      <NuxtPage />
</NuxtLayout>
  </div>
</template>
