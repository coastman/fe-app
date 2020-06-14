import { Plugin } from '@nuxt/types'
import getAPI from '@/api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: any
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: any
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: any
  }
}

const api: Plugin = (context, inject) => {
  const { $axios } = context.app

  inject('api', getAPI($axios))
}

export default api
