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
    const auth = useAuthStore()
    const data = response.data

    if (data.code === 1) {
      if (typeof data.data === 'string') {
        window.$message.info(data.data)
      }
    } else {
      window.$message.error(data.msg)

      if (data.code === 401) {
        auth.loginInfo = null
      }

      return Promise.reject(data)
    }

    return response.data.data
  },
  (error: AxiosError) => {
    window.$message.error(error.message)
    return Promise.reject(error)
  }
)

export default axios
