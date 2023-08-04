<template>
  <canvas ref="elRef" />
</template>

<script setup lang="ts">
const elRef = ref<HTMLCanvasElement>(null!)

defineExpose({
  elRef
})
</script>

<style scoped></style>
