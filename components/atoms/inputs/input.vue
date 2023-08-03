<template>
  <input v-model="modelValue" type="text" class="input" />
</template>

<script setup lang="ts">
const modelValue = defineModel<string>({
  required: true
})
</script>

<style scoped></style>
