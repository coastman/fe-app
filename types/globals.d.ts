// 全局通用 ts 类型

declare namespace Http {
  type Resp = {
    code: number
    result?: any
    msg: string
  }
}

declare module 'xss'
