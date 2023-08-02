<template>
  <button class="py-2 px-4 rounded-md" :class="cl">
    <slot />
  </button>
</template>

<script setup lang="ts">
const options = {
  accent: "bg-blue-500 text-white",
  warning: "bg-orange-400 text-white",
  error: "bg-red-500 text-white",
};

const { variant = "accent" } = defineProps<{
  variant?: keyof typeof options;
}>();
const cl = computed(() => options[variant]);
</script>
