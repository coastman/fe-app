
import API, { APIs } from './service'
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from '@/types'

// ===== axios 拦截器
// 参考 https://www.kancloud.cn/yunye/axios/234845

export default (axios: AxiosInstance) => {
  axios.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      return config
    },
    (error): Promise<any> => {
      return Promise.resolve(error)
    }
  )

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data
    },
    (error): Promise<any> => {
      return Promise.resolve(error)
    }
  )

  const api: APIs = {}
  Object.keys(API).forEach((key: string) => {
    api[key] = new (API as {[key: string ]: any})[key](axios)
  })

  return api
}
