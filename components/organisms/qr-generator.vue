<template>
  <div>
    <div class="flex flex-col items-center gap-2">
      <div class="h-72 w-72 bg-white">
        <atom-canvas ref="canvasRef" class="!h-72 !w-72" />
      </div>
      <atom-input v-model.trim="qrSource" />
      <atom-input v-model.trim="qrTitle" />
      <atom-button :disabled="isDisable" @click="save">Save</atom-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toDataURL } from 'qrcode'
import { watchDebounced, watchOnce } from '@vueuse/core'

const canvasRef = ref<{ elRef: HTMLCanvasElement }>(null!)
const qrSource = ref('')
const qrTitle = ref('')
const isDisable = ref(false)
let dataUrl = ''

const save = async () => {
  await useFetch('/api/save-qr', {
    method: 'POST',
    body: {
      content: dataUrl,
      title: qrTitle.value
    }
  })
}

const onChange = () => {
  isDisable.value = true
}

watchOnce(qrSource, onChange)
watchDebounced(
  qrSource,
  async () => {
    isDisable.value = false

    if (!qrSource.value.length) return

    dataUrl = await toDataURL(canvasRef.value.elRef, qrSource.value)
    watchOnce(qrSource, onChange)
  },
  {
    debounce: 500
  }
)
</script>

<style scoped></style>
