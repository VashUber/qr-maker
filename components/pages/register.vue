<template>
  <div class="flex min-h-[80vh] flex-col items-center justify-center gap-4">
    <form class="flex flex-col gap-2" @submit.prevent="signin">
      <atom-input v-model="username" placeholder="Enter username" />
      <atom-input
        v-model="password"
        type="password"
        placeholder="Enter password" />
      <atom-button>register</atom-button>
    </form>

    <nuxt-link to="/login">or login</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const username = ref('')
const password = ref('')

const signin = async () => {
  await useFetch('/api/register', {
    method: 'POST',
    body: {
      username: username.value,
      password: password.value
    }
  })
  router.push('/login')
}
</script>

<style scoped></style>
