<template>
  <div>
    <div v-if="data?.user?.name">
      {{ data.user.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = useAuth();
</script>

<style scoped></style>
