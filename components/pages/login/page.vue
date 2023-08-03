<template>
  <div class="flex items-center gap-4">
    <atom-button
      variant="error"
      @click="
        () => {
          runSignin()
        }
      ">
      click
    </atom-button>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth()

const runSignin = () => {
  signIn('credentials', {
    username: 'samara',
    password: 'samara'
  })
}
</script>

<style scoped></style>
