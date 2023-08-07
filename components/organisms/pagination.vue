<template>
  <div class="pagination">
    <atom-button v-if="!isFirst" @click="updatePage(-firstVisible + 1)"> {{ '<<' }} </atom-button>

    <atom-button :disabled="isFirst" @click="updatePage(-1)"> {{ '<' }} </atom-button>

    <atom-button v-for="i in pages" :key="i" @click="updatePage(i - 1)">
      {{ firstVisible + i - 1 }}
    </atom-button>

    <atom-button :disabled="lastVisible >= total" @click="updatePage(1)"> {{ '>' }} </atom-button>

    <atom-button v-if="lastVisible < total" @click="updatePage(-firstVisible + total)"> {{ '>>' }} </atom-button>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const { total, count = 5 } = defineProps<{
  total: number
  count?: number
}>()

const paramPage = computed(() => Number(route.params.page))
const isFirst = computed(() => Number(paramPage.value) === 1)

const lastVisible = computed(() => {
  if (total < count) return total

  return paramPage.value + count - 1
})
const firstVisible = computed(() => {
  if (total < count) return 1

  if (paramPage.value <= total - count) return paramPage.value

  return total - count
})

const pages = computed(() => {
  if (total < count) {
    return total
  }

  if (lastVisible.value >= total) {
    return count + 1
  }

  return count
})

const updatePage = (value: number) => {
  router.push({
    params: {
      page: firstVisible.value + value
    }
  })
}
</script>

<style scoped lang="scss">
.pagination {
  @apply mx-auto flex w-max gap-2;
}
</style>
