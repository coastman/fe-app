<template>
  <div class="app-main">
    <!-- 吸顶导航 -->
    <Header />

    <!-- 主体内容 -->
    <main class="main-container">
      <LeftMenu />
      <nuxt />
      <RightBar />
    </main>

    <!-- 底部 footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './Header.vue'
import Footer from './Footer.vue'
import LeftMenu from './LeftMenu.vue'
import RightBar from './RightBar.vue'

@Component({
  name: 'Main',
  components: { Header, Footer, LeftMenu, RightBar }
})

export default class extends Vue {
  name: string = '1'
}
</script>

<style lang="scss" scoped>
.app-main {
  padding-top: 72px;

  .main-container {
    width: 1064px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    // background-color: coral;
  }
}
</style>
