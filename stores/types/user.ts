export interface UserInfo {
  access_token: string;
  exp_at: number;
  exp_in: number;
  token_type: string;
  guest?: string; // 刷新token接口没返回这个字段
}
