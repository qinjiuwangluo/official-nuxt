import type { UserInfo } from './types/user'

const useUserStore = defineStore('UserStore', {
  state: () => {
    return {
      userInfo: {} as UserInfo
    }
  },
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo
    }
  },
  actions: {
    setUserInfo(info: UserInfo) {
      this.userInfo = info
    },

    // 重置所有信息
    resetAll() {
      this.$reset()
    }
  },
  // 开启数据缓存
  persist: {
    storage: piniaPluginPersistedstate.localStorage()
  }
})

export default useUserStore
