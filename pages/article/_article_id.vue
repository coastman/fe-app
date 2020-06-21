<template>
  <div class="article">
    <div v-safe-html="content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Context } from '@/types'

@Component({
  async asyncData({ app, params }: Context): Promise<object> {
    const { result }: Http.Resp = await app.$api.article.findOne(params.article_id)
    return { content: app.$mark(result.content) }
  }
})

export default class extends Vue {
  private name: string = 'I am a fish'
}
</script>

<style lang="scss" scoped>
.article {
  width: 608px;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  // background-color: $body-bg;

  h3 {
    margin-top: 14px;
    cursor: pointer;
  }
}
</style>
