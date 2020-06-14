import { AxiosInstance } from 'axios'
import BaseAPI from './base'

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
}
