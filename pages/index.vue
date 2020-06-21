<template>
  <div class="container">
    <nuxt-link v-for="(item, index) in list" :key="index" :to="`article/${item.id}`">
      <h3 class="article-title">
        {{ item.name }}
      </h3>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Context } from '@/types'

@Component({
  // ts 版本 asyncData 函数无法在 class 类中使用
  // 参考 https://github.com/nuxt/nuxt.js/issues/5330
  async asyncData({ app }: Context): Promise<object> {
    const { result }: Http.Resp = await app.$api.article.findAll()
    return { list: result.list }
  }
})

export default class extends Vue {
  private name: string = 'I am a fish'
  private subtitle: string = 'My amazing Nuxt.js project'
  private docs: string = 'Documentation'
  private github: string = 'GitHub'
}
</script>

<style lang="scss" scoped>
.container {
  width: 608px;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;

  .article-title {
    margin-top: 14px;
    cursor: pointer;
  }
}
</style>
