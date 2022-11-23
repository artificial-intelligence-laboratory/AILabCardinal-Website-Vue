import { useQueryClient } from '@tanstack/vue-query'
import useAuthStore from '@/features/Auth/stores/useAuthStore'

const useQueryDefaultOptions = () => {
  const queryClient = useQueryClient()
  const auth = useAuthStore()

  watch(
    () => auth.isLoggedIn,
    isLoggedIn => {
      queryClient.setDefaultOptions({
        queries: { enabled: isLoggedIn }
      })
    },
    { immediate: true }
  )
}

export default useQueryDefaultOptions
