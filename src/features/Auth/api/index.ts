import { useMutation } from '@tanstack/vue-query'
import axios from '@/shared/axios'
import type { LoginData, LoginDTO } from './types'
import useAuthStore from '../stores/useAuthStore'

const AUTH_API_PATH = '/passport'

export const useLogin = () => {
  const auth = useAuthStore()

  const mutation = useMutation({
    mutationFn(params: LoginDTO) {
      return axios.post<unknown, LoginData>(AUTH_API_PATH + '/login', params)
    },
    onSuccess(data) {
      auth.loginInfo = data
    }
  })

  return mutation
}

export const useLogout = () => {
  const auth = useAuthStore()

  const mutation = useMutation({
    mutationFn() {
      return axios.post(AUTH_API_PATH + '/logout')
    },
    onSettled() {
      auth.loginInfo = null
    }
  })

  return mutation
}
