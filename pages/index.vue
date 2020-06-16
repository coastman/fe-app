<template>
  <div class="container">
    <p v-for="(item, index) in list" :key="index">
      {{ item.content }}
    </p>
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Context } from '@/types'
import Logo from '@/components/Logo.vue'

@Component({
  components: {
    Logo
  },
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  // background-color: $body-bg;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
