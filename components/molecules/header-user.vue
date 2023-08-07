<template>
  <div class="flex items-center gap-2">
    <template v-if="data?.user?.name">
      {{ data.user.name }}

      <atom-button variant="error" @click="signOut">logout</atom-button>
    </template>

    <template v-else>
      <nuxt-link to="/login">
        <atom-button>login</atom-button>
      </nuxt-link>
    </template>
  </div>
</template>

<script setup lang="ts">
const { data, signOut } = useAuth()
</script>

<style scoped></style>
