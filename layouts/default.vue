<template>
  <div>
    <!-- <AppHeader /> -->
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mock = await useMock()
onMounted(async () => {
  const dataObj = await dataFetch(mock, window.location.host.split('.')[1])
  useHead({
    title: dataObj.data.name_up,
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/${window.location.host.split('.')[1]}/favicon.ico`
      }
    ],
    meta: [
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1'
      }
    ]
  })
})
</script>
