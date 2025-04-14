// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/icon'
  ],
  css: [
    '~/assets/less/tailwind.css',
    '~/assets/less/index.less',
    'animate.css/animate.min.css'
  ],

  // 运行时的全局变量
  runtimeConfig: {
    public: {
      baseUrl: 'https://xxx.yyyy.com/',
      version: '1.0.0'
    }
  },
  app: {
    head: {
      link: [],
      script: []
    }
  },
  build: {
    transpile: [/vue-i18n/]
  },
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 16, // 根据设计图尺寸写，设计图是1920，就写192
        unitPrecision: 5, // 允许REM单位增长到的十进制数字,小数点后保留的位数。
        propList: ['*'], // 需要被转换的属性
        mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
        selectorBlackList: ['.el', '.vjs'] // 不进行px转换的选择器
      }
    }
  }
})
