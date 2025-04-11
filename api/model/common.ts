export interface BaseResult<T> {
    code: number;
    message: string;
    result: T;
}
export interface PageData {
    title: string; // 标题
    page_code: string; // 页面编码
    group_code: string; // 模块编码
    show_type: string; // 模块类型
    items: any
}
