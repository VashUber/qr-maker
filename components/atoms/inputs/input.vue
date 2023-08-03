<template>
  <input type="text" v-model="modelValue" />
</template>

<script setup lang="ts">
const modelValue = defineModel<string>({
  required: true,
});
</script>

<style scoped></style>
