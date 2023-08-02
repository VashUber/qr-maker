<template>
  <div class="flex gap-4 items-center">
    <atom-button @click="runSignin">singin</atom-button>
    <atom-button @click="signOut">signout</atom-button>
  </div>

  {{ data?.user }}
</template>

<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth();

const runSignin = () => {
  signIn("credentials", {
    username: "jsmith",
    password: "hunter2",
  });
};
</script>

<style scoped></style>
