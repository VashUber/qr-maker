<template>
  <div>
    <canvas ref="canvas" />
    <atom-input v-model.trim="qrSource" />
  </div>
</template>

<script setup lang="ts">
import qrcode from "qrcode";
import { watchDebounced } from "@vueuse/core";

const canvas = ref<HTMLCanvasElement>(null!);
const qrSource = ref("");

watchDebounced(
  qrSource,
  () => {
    if (!qrSource.value.length) return;

    qrcode.toCanvas(canvas.value, qrSource.value);
  },
  {
    debounce: 500,
  }
);
</script>

<style scoped></style>
