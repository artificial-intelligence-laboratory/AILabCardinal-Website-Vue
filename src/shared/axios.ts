import Axios, { AxiosError, type AxiosRequestConfig } from 'axios'
import useAuthStore from '@/features/Auth/stores/useAuthStore'
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
    const auth = useAuthStore()
    const data = response.data

    if (data.code === 1) {
      if (typeof data.data === 'string') {
        window.$message.info(data.data)
      }
    } else {
      if (data.code === 401) {
        auth.loginInfo = null
      }

      return Promise.reject(new AxiosError(data.msg, data.code))
    }

    return response.data.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default axios
