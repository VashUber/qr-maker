<template>
  <div class="flex flex-col gap-2">
    <img :src="img" :alt="title" class="!h-40 !w-40" />
    <h2>
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
const { img, title } = defineProps<{ img: string; title: string }>()
</script>

<style scoped></style>
