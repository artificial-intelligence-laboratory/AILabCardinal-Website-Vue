import { QueryClient } from '@tanstack/vue-query'

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } }
})

export default queryClient
