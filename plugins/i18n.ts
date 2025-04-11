import { createI18n } from 'vue-i18n'
import en from './lang/en'

export const setCurrLang = () => {
  // const localLang = navigator.language.split('-')[0]; // 浏览器语言
  return 'en'
}
export default defineNuxtPlugin(({ vueApp }) => {
  // 注册i18n实例并引入语言文件
  const i18n = createI18n({
    legacy: false,
    locale: setCurrLang(), // set default locale
    fallbackLocale: setCurrLang(), // set fallback locale
    messages: {
      en,
    } // set locale messages
  })
  vueApp.use(i18n)
})
