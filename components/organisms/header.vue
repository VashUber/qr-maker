<template>
  <header class="header">
    <atom-wrapper>
      <div class="header__content">
        <molecule-header-menu />
        <molecule-header-user />
      </div>
    </atom-wrapper>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  @apply h-14 bg-slate-700 shadow-md;

  &__content {
    @apply flex h-full items-center justify-between;
  }
}
</style>
