import type { UseFetchOptions } from 'nuxt/app'
import type { BaseResult } from '~/api/model/common'
interface NuxtFetchOptions<T> extends UseFetchOptions<T> {
  url: string
}
export interface DataFetchOptions<T> extends UseFetchOptions<T> {
  showError?: boolean
}

// 封装http 请求
export function useCustomFetch<T>(url: string, opts: DataFetchOptions<T> = {}) {

  return useFetch(url, {
    baseURL: 'https://api.guyantv.com/',
    ...opts,
    onRequest({ options }) {
      options.headers = {
        // @ts-ignore
        platform: 'h5',
        'content-type': 'application/json'
      }
      // 客户端请求才加密
      options.headers = {
        ...options.headers,
        // @ts-ignore
        Security: import.meta.client ? 'true' : 'false'
      }
    },
    onResponse({ response }) {
      let responseData = response._data
      if (import.meta.client) {
        const _responseData = decryptCxEd(responseData)
        response._data = JSON.parse(_responseData)
      }

      // http正确
      if (response.status >= 200 && response.status < 300) {
        console.error('error', response._data)
      } else {
        if (import.meta.client) {
          ElMessage.error(response._data.msg || '请求出错,请重试')
        }
      }
    },
    onResponseError({ error }) {
      console.error('全局错误打印:', error)
    }
  })
}
export function get<T>(opts: NuxtFetchOptions<BaseResult<T>>) {
  return useCustomFetch<BaseResult<T>>(opts.url, {
    ...opts,
    method: 'get'
  })
}
export function post<T>(opts: NuxtFetchOptions<BaseResult<T>>) {
  // 注意如果是post请求,body不能为空,要传一个空对象过去
  if (!opts.body) {
    opts.body = {}
  }
  return useCustomFetch<BaseResult<T>>(opts.url, {
    ...opts,
    method: 'post'
  })
}
