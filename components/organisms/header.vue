<template>
  <header class="header">
    <atom-wrapper>
      <div class="header__content">
        <div>1</div>
        <div>
          <molecule-header-user />
        </div>
      </div>
    </atom-wrapper>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  @apply bg-slate-700 shadow-md h-14;

  &__content {
    @apply flex items-center justify-between h-full;
  }
}
</style>
