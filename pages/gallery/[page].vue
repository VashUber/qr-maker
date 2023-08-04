<template>
  <div>
    {{ route.params.page }}

    <button
      @click="
        router.push({
          params: {
            page: +route.params.page + 1
          }
        })
      ">
      add
    </button>

    <div v-for="qr in data" :key="qr.id">
      {{ qr.id }} -
      <img :src="qr.content" class="!h-40 !w-40" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const page = computed(() => route.params.page as string)

const { data } = useFetch('/api/get-qrs', {
  query: {
    page: page.value
  }
})
</script>

<style scoped></style>
