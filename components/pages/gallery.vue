<template>
  <div>
    <molecule-qr-thumbs v-if="data" :thumbs="data.data" />

    <organism-pagination v-if="data" :total="data?.totalPage" />
  </div>
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
