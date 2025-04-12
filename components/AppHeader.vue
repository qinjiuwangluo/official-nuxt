<template>
  <div
    class="w-full flex flex-wrap justify-center transition-all duration-500 z-full top-0 left-0 fixed"
    :class="scrollPosition > 2 ? 'h-70 bg-[#fffffff2]  shadow-header' : 'h-90'"
  >
    <div class="block lg:hidden text-14 h-full w-full md:w-md px-32 md:px-16">
      <div class="flex flex-wrap justify-between items-center h-full py-8">
        <img class="h-30" :src="`/${name}/header_logo.png`" alt="404" />
        <img
          v-show="scrollPosition > 2"
          class="w-30 h-30 p-4"
          src="@/assets/catalog.png"
          @click="drawer = true"
        />
        <img
          v-show="scrollPosition <= 2"
          class="w-30 h-30 p-4"
          src="@/assets/catalog-w.png"
          @click="drawer = true"
        />
      </div>

      <el-drawer
        class="tg"
        v-model="drawer"
        direction="ltr"
        :with-header="false"
        :style="{
          '--el-drawer-padding-primary': 0
        }"
        size="50%"
      >
        <div class="flex justify-end p-16">
          <img
            class="w-20 h-20"
            src="@/assets/x.png"
            alt=""
            @click="drawer = false"
          />
        </div>

        <div class="w-full flex-col">
          <div
            v-for="item in list"
            :key="item.id"
            class="w-full p-14 border-0 border-b-[1px] border-solid border-000-1 justify-center items-center"
            @click="tabClick(item.id)"
          >
            {{ $t(item.name) }}
          </div>
        </div>
      </el-drawer>
    </div>
    <div
      class="hidden lg:block transition-all duration-500 text-14 h-full w-lg xl:w-xl"
    >
      <div
        class="flex flex-wrap justify-between items-center h-full px-28 py-8"
      >
        <img class="h-34" :src="`/${name}/header_logo.png`" alt="404" />
        <div class="flex flex-wrap items-center">
          <a
            class="px-12 py-8 font-600 cursor-pointer"
            :class="scrollPosition > 2 ? 'text-000' : 'text-fff'"
            :href="`#${item.id}`"
            v-for="(item, index) in list"
            :key="index"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const drawer = ref(false)
const list = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'explore', name: 'Explore' },
  { id: 'contact', name: 'Contact Us' },
  { id: 'screenshot', name: 'App Screenshots' },
  { id: 'download', name: 'Download' }
]
const scrollPosition = ref(0)
const name = ref('comon')
const mock = await useMock()
onMounted(async () => {
  name.value = await dataFetch(mock, window.location.host.split('.')[0]).name
  window.addEventListener('scroll', updateScrollPosition)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollPosition)
})
const updateScrollPosition = () => {
  scrollPosition.value = window.scrollY // 或者 window.pageYOffset, 根据需要选择使用哪个属性
}
const tabClick = (id) => {
  const el = document.getElementById(id)
  const scrollContainer = document.scrollingElement || document.documentElement
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset
    scrollContainer.scrollTo({
      top,
      behavior: 'smooth'
    })
    drawer.value = false
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.tg .el-drawer__body {
  padding: 0 !important;
}
</style>
<style>
html {
  scroll-behavior: smooth;
}
</style>
