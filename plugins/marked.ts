// markdown 解析插件
// 参考 https://marked.js.org/#/README.md

import marked from 'marked'
import { Plugin } from '@/types'

declare module 'vue/types/vue' {
  interface Vue {
    $marked: Function
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $marked: Function
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $marked: Function
  }
}

const mark: Plugin = (_content, inject) => {
  marked.setOptions({
    breaks: true
  })
  inject('mark', marked)
}

export default mark
