import { useMutation } from '@tanstack/vue-query'
import axios from '@/shared/axios'
import type { CheckInDTO } from './types'

const USER_API_PATH = '/user'

export const useCheckIn = () => {
  const mutation = useMutation({
    mutationFn(params: CheckInDTO) {
      return axios.post(USER_API_PATH + '/signIn', params)
    },
    onSuccess(data) {
      console.log({ data })
    }
  })

  return mutation
}
