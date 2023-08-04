<template>
  <button
    class="rounded-md px-4 py-2 transition-all active:scale-110 active:ring-2 disabled:brightness-75 disabled:active:scale-100 disabled:active:ring-0"
    :class="cl"
    v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
const options = {
  accent: 'bg-blue-500 text-white',
  warning: 'bg-orange-400 text-white',
  error: 'bg-red-500 text-white'
}

const { variant = 'accent' } = defineProps<{
  variant?: keyof typeof options
}>()
const cl = computed(() => options[variant])
</script>
