<template>
  <div
    class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
    <atom-thumb
      v-for="thumb in thumbs"
      :key="thumb.id"
      :img="thumb.content"
      :title="thumb.title" />
  </div>
</template>

<script setup lang="ts">
import type { QRCodeI } from '~/entity/qr'

const { thumbs } = defineProps<{
  thumbs: QRCodeI[]
}>()
</script>

<style scoped></style>
