<template>
  <div class="flex flex-col gap-2">
    <img :src="img" :alt="title" class="!w-full" />
    <h2>
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
const { img, title } = defineProps<{ img: string; title: string }>()
</script>

<style scoped></style>
