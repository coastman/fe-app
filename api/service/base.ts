import { AxiosInstance } from 'axios'

export default class BaseAPI {
  namspace: string
  version: string
  request: AxiosInstance

  constructor(namspace: string, request: AxiosInstance, version?: string) {
    this.namspace = namspace
    this.version = version || 'v1'
    this.request = request
  }

  public async create(data: any) {
    return await this.request({
      url: `/api/${this.version}/${this.namspace}`,
      method: 'post',
      data
    })
  }

  public async update(data: any) {
    return await this.request({
      url: `/api/${this.version}/${this.namspace}`,
      method: 'put',
      data
    })
  }

  public async destory(uuid: number | string) {
    return await this.request({
      url: `/api/${this.version}/${this.namspace}/${uuid}`,
      method: 'delete'
    })
  }
}
