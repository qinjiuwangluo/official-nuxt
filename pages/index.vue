<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/scss/pagination'
import 'swiper/css/autoplay'

import { ref, onMounted } from 'vue'
const about = ref([
  { router: '/private', name: 'Private' },
  { router: '/user_policy', name: 'User Policy' }
])
const name = ref('comon')
const data = ref({})
const mock = await useMock()
onMounted(async () => {
  const dataObj = await dataFetch(mock, window.location.host.split('.')[1])
  name.value = dataObj.name
  data.value = dataObj.data
})
const router = useRouter()
const openPage = (path) => {
  router.push({
    path
  })
}
const openApp = (type) => {
  if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
    var loadDateTime = new Date().getTime()
    window.setTimeout(function () {
      var timeOutDateTime = new Date().getTime()
      if (timeOutDateTime - loadDateTime < 3000) {
        window.location.href = data.value.iosLink //下载链接
      } else {
        window.close()
      }
    }, 2000)
    window.location.href = data.value.iosScheme //当前ios应用的scheme协议
  } else if (navigator.userAgent.match(/android/i)) {
    var loadDateTime = new Date().getTime()
    window.setTimeout(function () {
      var timeOutDateTime = new Date().getTime()
      if (timeOutDateTime - loadDateTime < 3000) {
        window.location.href = data.value.androidLink //下载链接
      } else {
        window.close()
      }
    }, 1500)
    window.location.href = data.value.androidScheme //当前Android应用的协议
  } else if (type == 'App Store') {
    window.location.href = data.value.iosLink
  } else {
    window.location.href = data.value.androidLink
  }
}
</script>
<template>
  <AppHeader />
  <div
    id="home"
    class="w-full pt-120 pb-120 xl:pb-260 relative text-14 px-16 md:px-0 overflow-hidden"
    :style="`background-image: url('/${name}/home_bg.png'); background-size: cover;`"
  >
    <div class="w-full h-full absolute left-0 top-0 opacity-60 z-1" />
    <div class="flex flex-wrap justify-center w-full">
      <div
        class="w-full max-h-[800px] md:h-auto md:w-md lg:w-lg xl:w-xl flex flex-wrap justify-center items-center"
      >
        <div
          class="text-fff mx-16 flex-1 relative z-30 text-center md:text-left"
        >
          <div class="text-28 md:text-[40px] lg:text-[56px] uppercase font-600">
            Hi, I'm {{ data.name_up }} app.
          </div>
          <div class="leading-1.6 font-300 text-16 mt-10">
            {{ data.home?.text }}
          </div>
          <div
            class="flex justify-center flex-col lg:flex-row lg:justify-end xl:justify-center"
          >
            <div class="flex">
              <div
                class="w-full px-42 py-16 rounded-4 bg-[#39b139] flex justify-center mt-16 cursor-pointer"
                @click="openApp('Google Play')"
              >
                Google Play
                <img
                  class="w-20 h-20 ml-10"
                  src="/assets/google-play.png"
                  alt=""
                />
              </div>
            </div>
            <div class="flex">
              <div
                class="px-42 py-16 rounded-4 bg-[#691cff] w-full justify-center lg:ml-20 flex mt-16 cursor-pointer"
                @click="openApp(' App Store')"
              >
                App Store
                <img
                  class="w-20 h-20 ml-10"
                  src="/assets/app-store.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          class="mt-80 w-full md:w-330 md:h-586 lg:w-450 lg:h-[800px] xl:w-528 xl:h-[936px] mx-16 relative z-10 bg-[length:100%_auto] jump"
          :src="`/${name}/home_img.png`"
        />
      </div>
    </div>
    <svg
      class="absolute left-0 bottom-[-1px] fill-white wave z-20"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 300"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"
      ></path>
      <path
        d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"
      ></path>
      <path
        d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"
      ></path>
    </svg>
  </div>
  <div id="about" class="py-120 w-full flex flex-wrap justify-center relative">
    <div
      class="md:w-md lg:w-lg xl:w-xl flex flex-wrap justify-center items-center"
    >
      <div class="px-16">
        <img
          class="w-full md:w-690 lg:w-450 xl:w-540 bg-[length:100%_auto] jump"
          :src="`/${name}/about_img.png`"
        />
      </div>

      <div class="pr-16 pl-16 w-full lg:pl-40 mt-30 md:mt-0 lg:w-390 xl:w-450">
        <div class="font-300 text-24 leading-1.2">{{ data.about?.name }}</div>
        <div class="font-600 leading-1.2 m-w-480 text-30 mt-20">
          {{ data.about?.text }}
        </div>
        <div
          class="flex flex-wrap mt-40"
          v-for="(item, index) in data.about?.list"
          :key="index"
        >
          <img
            class="w-10 h-10 mt-8 mr-10"
            src="/assets/point.png"
            alt=""
            srcset=""
          />
          <div class="flex-1">
            <div class="text-18">{{ item.name }}</div>
            <div class="max-w-300 mt-16 text-[#8c8d9e] leading-1.5">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="explore"
    class="w-full py-120 relative text-14 flex justify-center text-fff"
  >
    <img
      class="w-full h-full absolute left-0 top-0 z-[-1]"
      :src="`/${name}/explore_bg.png`"
    />
    <div class="md:w-md lg:w-lg xl:w-xl px-16">
      <div class="w-full lg:w-2/3 xl:w-1/2 leading-1.2">
        <div class="text-24 font-300">Explore More</div>
        <div class="text-30 md:text-[46px] font-600 pt-10">
          {{ data.explore?.name }}
        </div>
        <div class="text-14 md:text-18 font-300 pt-30 leading-1.6">
          {{ data.explore?.text }}
        </div>
        <div
          class="pt-30 leading-1.2 flex flex-wrap justify-between items-center"
        >
          <div
            class="border-0 border-r-[1px] last:border-r-0 border-solid border-fff-4 w-1/3 flex flex-col items-center"
            v-for="(item, index) in data.explore?.list || []"
          >
            <div class="font-300 text-30 md:text-[50px] leading-1.2">
              {{ item.name }}
            </div>
            <div class="mt-10 md: text-18">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="contact"
    class="w-full py-60 md:py-100 relative text-14 flex justify-center"
    :style="`background-image: url('/full/download-bg.png')`"
  >
    <div
      class="w-full md:w-md lg:w-lg xl:w-xl flex flex-col lg:flex-row justify-between px-16"
    >
      <div class="w-full lg:w-1/2 leading-1.2">
        <div class="text-18 font-600">Contact Us</div>
        <div
          class="text-18 md:text-[28px] leading-1.5 pt-10 text-[#8c8d9e]"
          v-html="data.contact?.name"
        />
        <div class="text-18 pt-16 md:text-24 text-[#007bff]">
          <a class="" :href="data.emailHref">{{ data.email }}</a>
        </div>
      </div>
      <div class="w-full mt-10 lg:mt-0 lg:w-1/2">
        <img
          class="w-full md:w-320 jump mt-20 lg:mt-0"
          :src="`/${name}/contact_img.png`"
        />
      </div>
    </div>
  </div>
  <div class="h-100 bg-[#222] w-full"></div>
  <div id="screenshot" class="py-120 bg-[#eee] w-full px-8">
    <div class="text-center font-600 text-[222] text-30">App Screenshots</div>
    <div class="block sm:hidden pt-70">
      <swiper
        :modules="[Autoplay, Pagination, EffectCoverflow]"
        :slides-per-view="1.3"
        :centeredSlides="true"
        :spaceBetween="50"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        effect="coverflow"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false
        }"
      >
        <swiper-slide v-for="(item, index) in 5" :key="index">
          <img
            class="w-full h-full"
            :src="`/${name}/screenshots0${item}.png`"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="hidden sm:block lg:hidden pt-70">
      <Swiper
        :slides-per-view="3"
        :centered-slides="true"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :pagination="{ clickable: true }"
        :modules="[Autoplay, Pagination]"
        class="custom-swiper-sm"
      >
        <swiper-slide v-for="(item, index) in 5" :key="index">
          <img
            class="w-full h-full slide-img"
            :src="`/${name}/screenshots0${item}.png`"
          />
        </swiper-slide>
      </Swiper>
    </div>
    <div class="hidden lg:block pt-70">
      <Swiper
        :slides-per-view="5"
        :centered-slides="true"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :pagination="{ clickable: true }"
        :modules="[Autoplay, Pagination]"
        class="custom-swiper-lg"
      >
        <swiper-slide v-for="(item, index) in 5" :key="index">
          <img
            class="w-full h-full slide-img"
            :src="`/${name}/screenshots0${item}.png`"
          />
        </swiper-slide>
      </Swiper>
    </div>

    <!-- <div class="hidden lg:block">
      <div class="pt-70 flex flex-wrap lg:justify-center jump">
        <div
          class="w-1/2 px-8 mb-16 lg:w-190 lg:h-340 xl:w-224 xl:h-400 lg:px-0"
          :class="index !== 2 ? 'lg:scale-90' : ''"
          v-for="(item, index) in 5"
          :key="index"
        >
          <img
            class="w-full h-full"
            :src="`/${name}/screenshots0${item}.png`"
          />
        </div>
      </div>
    </div> -->
  </div>
  <div
    id="download"
    class="w-full py-100 relative text-14 flex justify-center min-h-440 items-center"
    :style="`background-image: url('/full/download-bg.png'); `"
  >
    <div
      class="md:w-md lg:w-lg xl:w-xl flex flex-wrap justify-between items-center px-16"
    >
      <div class="text-36 font-600">Get Started for Free</div>

      <div
        class="flex justify-center md:justify-start flex-col md:flex-row lg:justify-end text-fff mt-10 w-full lg:w-auto"
      >
        <div class="flex">
          <div
            class="px-42 py-16 rounded-4 bg-[#39b139] w-full justify-center flex mt-16 cursor-pointer"
            @click="openApp('Google Play')"
          >
            Google Play
            <img class="w-20 h-20 ml-10" src="/assets/google-play.png" alt="" />
          </div>
        </div>
        <div class="flex md:ml-20">
          <div
            class="px-42 py-16 rounded-4 bg-[#691cff] lg:ml-20 w-full justify-center flex mt-16 cursor-pointer"
            @click="openApp('App Store')"
          >
            App Store
            <img class="w-20 h-20 ml-10" src="/assets/app-store.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full py-76 text-14 flex justify-center bg-[#222] text-fff">
    <div
      class="md:w-md lg:w-lg xl:w-xl flex flex-wrap justify-between items-center px-16"
    >
      <div class="w-full lg:w-auto flex flex-col items-center lg:items-start">
        <img class="h-30" :src="`/${name}/logo.png`" alt="" />
        <div class="pt-30">
          Copyright © {{ data.time || 2025 }}.{{ data.name_up }} All rights
          reserved.
        </div>
      </div>
      <div
        class="w-full lg:w-auto flex flex-col items-center lg:items-end mt-26"
      >
        <div class="flex flex-end">
          <img class="w-20 h-20" src="/assets/facebook.png" />
          <img class="w-20 h-20 ml-16" src="/assets/google.png" />
          <img class="w-20 h-20 ml-16" src="/assets/instagram.png" />
        </div>
        <div class="flex flex-end mt-20">
          <div
            class="ml-16 underline cursor-pointer"
            v-for="(item, index) in about"
            :key="index"
            @click="openPage(item.router)"
          >
            {{ item.name }}
          </div>
          <div class="ml-16 underline cursor-pointer">
            <a class="" href="mailto:guyanchuangju@163.com">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.wave {
  path:nth-child(1) {
    opacity: 0.15;
  }
  path:nth-child(2) {
    opacity: 0.3;
  }
}
.jump {
  animation: jump 5s linear 0s infinite normal forwards;
}
.custom-swiper-sm {
  padding-bottom: 16px;
  .swiper-slide {
    transition: transform 0.3s ease;
    transform: scale(0.8);
    opacity: 0.9;
  }
  .swiper-slide-active {
    transform: scale(1);
    opacity: 1;
    z-index: 10;
  }
  .slide-img {
    width: 100%;
    border-radius: 10px;
  }
}
.swiper-pagination-horizontal {
  bottom: 0px !important;
}
.custom-swiper-lg {
  padding-bottom: 16px;

  .swiper-slide {
    transition: transform 0.3s ease;
    transform: scale(0.8);
    opacity: 0.9;
  }
  .swiper-slide-active {
    transform: scale(1);
    opacity: 1;
    z-index: 10;
  }
  .slide-img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
}
</style>
