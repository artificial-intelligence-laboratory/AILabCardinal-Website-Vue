import { useQueryClient } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'
import useAuthStore from '@/features/Auth/stores/useAuthStore'

const useQueryDefaultOptions = () => {
  const queryClient = useQueryClient()
  const auth = useAuthStore()

  const handleError = (error: AxiosError) => {
    window.$message.error(error.message)
  }

  watch(
    () => auth.isLoggedIn,
    isLoggedIn => {
      queryClient.setDefaultOptions({
        queries: {
          enabled: isLoggedIn,
          refetchOnWindowFocus: false,
          // @ts-ignore
          onError: handleError
        },
        // @ts-ignore
        mutations: { onError: handleError }
      })
    },
    { immediate: true }
  )
}

export default useQueryDefaultOptions
