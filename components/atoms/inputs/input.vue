<template>
  <input v-bind="$attrs" v-model="modelValue" type="text" class="input" />
</template>

<script setup lang="ts">
const modelValue = defineModel<string>({
  required: true
})
</script>

<style scoped lang="scss">
.input {
  @apply min-w-[180px] rounded-md px-2 py-1 text-gray-800 outline-none;
}
</style>
