import { defineStore } from 'pinia'
import { useStorage, StorageSerializers, isDefined, useNow } from '@vueuse/core'
import dayjs from 'dayjs'
import useAuthStore from '@/features/Auth/stores/useAuthStore'

const CHECKOUT_TIMES_STORE_KEY = 'checkout-times-storage'

type UserId = number
type CheckOutTime = string

const useCheckOutTimeStore = defineStore(CHECKOUT_TIMES_STORE_KEY, () => {
  const checkOutTimes = useStorage<Map<UserId, CheckOutTime>>(
    CHECKOUT_TIMES_STORE_KEY,
    new Map(),
    localStorage,
    {
      serializer: StorageSerializers.map
    }
  )

  const auth = useAuthStore()

  const userId = computed(() => auth.loginInfo?.user.userId)

  const checkOutTime = computed({
    get() {
      if (isDefined(userId) && checkOutTimes.value.has(userId.value)) {
        const checkOutTime = checkOutTimes.value.get(userId.value)!

        const countdown = dayjs(checkOutTime).diff(
          useNow({ interval: 1000 }).value,
          'h',
          true
        )

        return countdown
      }
      return 0
    },
    set(checkOutTime) {
      if (isDefined(userId)) {
        checkOutTimes.value.set(
          userId.value,
          dayjs().add(checkOutTime, 'h').toString()
        )
      }
    }
  })

  return {
    checkOutTime
  }
})

export default useCheckOutTimeStore
