<template>
  <div class="flex gap-4 items-center">
    <atom-button
      @click="
        () => {
          runSignin();
        }
      "
      variant="error"
    >
      click
    </atom-button>
  </div>

  {{ data }}
</template>

<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth();

const runSignin = () => {
  signIn("credentials", {
    username: "samara",
    password: "samara",
  });
};
</script>

<style scoped></style>
