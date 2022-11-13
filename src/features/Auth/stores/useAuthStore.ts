import { defineStore } from 'pinia'
import { useStorage, StorageSerializers, isDefined } from '@vueuse/core'
import type { LoginData } from '../api/types'

const LOGIN_INFO_STORE_KEY = 'login-info-storage'

const useAuthStore = defineStore(LOGIN_INFO_STORE_KEY, () => {
  const loginInfo = useStorage<LoginData | null>(
    LOGIN_INFO_STORE_KEY,
    null,
    localStorage,
    { serializer: StorageSerializers.object }
  )

  const isLoggedIn = computed(() => isDefined(loginInfo))

  return {
    loginInfo,
    isLoggedIn
  }
})

export default useAuthStore
