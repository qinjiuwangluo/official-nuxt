<script setup>
import { onMounted, ref } from 'vue'

const isLoading = ref(false)

onMounted(() => {
  isLoading.value = true
})
</script>

<template>
  <NuxtLayout
    style="scroll-behavior: smooth"
    :class="[isLoading ? 'block ' : 'hidden']"
  >
    <NuxtPage />
  </NuxtLayout>
</template>
