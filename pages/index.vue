<template>
  <div class="page">
    <div class="flex flex-col items-center gap-2">
      <div class="h-72 w-72 bg-white">
        <canvas ref="canvas" class="!h-72 !w-72" />
      </div>
      <atom-input v-model.trim="qrSource" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toCanvas } from 'qrcode'
import { watchDebounced } from '@vueuse/core'

const canvas = ref<HTMLCanvasElement>(null!)
const qrSource = ref('')

watchDebounced(
  qrSource,
  () => {
    if (!qrSource.value.length) return

    toCanvas(canvas.value, qrSource.value)
  },
  {
    debounce: 500
  }
)
</script>

<style scoped></style>
