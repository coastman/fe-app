
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import API, { APIs } from './service'

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
