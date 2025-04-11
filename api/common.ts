import type { PageData } from './model/common.ts'

  // 绑定邮箱
  export function bindEmail(data: any) {
    return post({
      url: `/bind`,
      body: data,
      server: false,
      lazy: true
    });
  }

  /**
 * 获取资源详情
 * @param res_id
 * @returns {*}
 */
export function getResourceDetail(res_id: number,key: string = '') {
  return get({
    url: `/api/res/${res_id}`,
    cache: "no-store",
    key
  });
}


/**
 * 最新剧集
 * @param data
 * @returns {*}
 */
export function newList(data: any) {
  return get<Array<PageData>>({
    url: '/web/videoList',
    params: data
  })
}

/**
 * 推荐剧集
 * @param data
 * @returns {*}
 */
export function addMonitorData(data: any) {
  return post({
    url: '/web/addMonitorData',
    body: data
  })
}