import BaseAPI from './base'
import { AxiosInstance } from '@/types'

export default class Article extends BaseAPI {
  constructor(request: AxiosInstance) {
    super('article', request)
  }

  public async findAll() {
    return await this.request({
      method: 'get',
      url: '/api/v1/article/all'
    })
  }

  public async findOne(id: number | string) {
    return await this.request({
      method: 'get',
      url: `/api/v1/article/${id}`
    })
  }
}
