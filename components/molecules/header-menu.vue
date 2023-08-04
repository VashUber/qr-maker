<template>
  <div class="flex gap-5">
    <nuxt-link to="/"> Generate </nuxt-link>
    <nuxt-link v-if="data?.user" to="/gallery/1"> Gallery </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const { data } = useAuth()
</script>

<style scoped></style>
