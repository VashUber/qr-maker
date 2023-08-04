<template>
  <div>
    <atom-thumb v-for="thumb in thumbs" :key="thumb.id" :img="thumb.content" :title="thumb.title" />
  </div>
</template>

<script setup lang="ts">
import type { QRCodeI } from '~/entity/qr'

const { thumbs } = defineProps<{
  thumbs: QRCodeI[]
}>()
</script>

<style scoped></style>
