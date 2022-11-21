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
    if (response.data.code !== 1) {
      window.$message.error(response.data.msg)

      return Promise.reject(response.data)
    }

    return response.data.data
  },
  (error: AxiosError) => {
    window.$message.error(error.message)
    return Promise.reject(error)
  }
)

export default axios
