import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { createQueryKeys } from '@lukemorales/query-key-factory'
import type { AxiosError } from 'axios'
import axios from '@/shared/axios'
import type { CheckInDTO } from './types'

const USER_API_PATH = '/user'

const checkInKeys = createQueryKeys('checkIn', {
  check: () => ({
    queryKey: ['check'],
    queryFn: async () => {
      return axios.get(USER_API_PATH + '/isSingIn')
    }
  })
})

export const useCheckIn = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn(params: CheckInDTO) {
      return axios.post(USER_API_PATH + '/signIn', params)
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: checkInKeys.check().queryKey })
    }
  })

  return mutation
}

export const useIsCheckIn = () => {
  const query = useQuery({
    ...checkInKeys.check(),
    onError() {
      //noop
    },
    cacheTime: Infinity,
    staleTime: Infinity,
    retry(_, error: AxiosError) {
      return Number(error.code) !== 411
    }
  })

  return query
}
