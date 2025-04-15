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
  const host = window.location.host
  const regex = /(?:www\.)?([a-zA-Z0-9-]+)\.com/
  const dataObj = await dataFetch(mock, host.match(regex)?.[1] || 'comon')
  useHead({
    title: dataObj.data.name_up,
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/${host.match(regex)?.[1]  || 'comon'}/favicon.ico`
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
