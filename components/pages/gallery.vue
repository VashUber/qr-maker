<template>
  <div v-if="data?.data.length">
    <molecule-qr-thumbs :thumbs="data.data" />

    <organism-pagination v-if="data.totalPage > 1" :total="data.totalPage" />
  </div>

  <div v-else>You didn't save any qr codes</div>
</template>

<script setup lang="ts">
const route = useRoute()

const page = computed(() => route.params.page as string)

const { data } = useFetch('/api/get-qrs', {
  query: {
    page: page.value
  }
})
</script>

<style scoped></style>
