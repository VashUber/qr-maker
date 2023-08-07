<template>
  <div class="flex min-h-[80vh] flex-col items-center justify-center gap-4">
    <div v-if="err === 'CredentialsSignin'" class="text-orange-400">
      Invalid credentials
    </div>

    <form class="flex flex-col gap-2" @submit.prevent="signin">
      <atom-input v-model="username" placeholder="Enter username" />
      <atom-input
        v-model="password"
        type="password"
        placeholder="Enter password" />
      <atom-button>login</atom-button>
    </form>

    <nuxt-link to="/register">or register</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { signIn } = useAuth()

const username = ref('')
const password = ref('')

const err = computed(() => route.query.error)

const signin = async () => {
  await signIn('credentials', {
    username: username.value,
    password: password.value,
    callbackUrl: '/'
  })
}
</script>

<style scoped></style>
