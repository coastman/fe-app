<template>
  <div class="app-main">
    <!-- 吸顶导航 -->
    <Header />

    <!-- 主体内容 -->
    <main class="main-container">
      <nuxt />
    </main>

    <!-- 底部 footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './Header.vue'
import Footer from './Footer.vue'

@Component({
  name: 'Main',
  components: {
    Header,
    Footer
  }
})

export default class extends Vue {
  name: string = '1'

  public setName () {
    this.name = '2'
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  padding-top: 72px;

  .main-container {
    width: 1050px;
    margin: 0 auto;
    background-color: coral;
  }
}
</style>
