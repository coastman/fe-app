// vue 扩展: 指令, mixins, filter 等

import Vue, { DirectiveOptions } from 'vue'
import xss from 'xss'

const xssOptions = {
  // whiteList: {
  //   span: ['class', 'style'],
  //   b: ['style'],
  //   i: ['class']
  // }
}

const saveHtml: DirectiveOptions = {
  bind(el, bind) {
    el.innerHTML = xss(bind.value, xssOptions)
  },
  update(el, bind) {
    el.innerHTML = xss(bind.value, xssOptions)
  }
}

Vue.directive('safe-html', saveHtml)
