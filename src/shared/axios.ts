import useAuthStore from '@/features/Auth/stores/useAuthStore'
import Axios, { type AxiosError, type AxiosRequestConfig } from 'axios'
import env from './env'

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  const auth = useAuthStore()

  if (auth.loginInfo && config.headers) {
    Object.assign(config.headers, {
      Authorization: auth.loginInfo.token
    })
  }

  return config
}

const axios = Axios.create({
  baseURL: env.BASE_API_PATH
})

axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use(
  response => {
    return response.data.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default axios
