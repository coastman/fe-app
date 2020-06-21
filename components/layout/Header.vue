<template>
  <header class="header">
    <div class="header-container">
      <h3 class="title">
        {{ title }}
      </h3>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Header'
})
export default class extends Vue {
  private title: string = 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  z-index: 999;
  background-color: #eee;

  &-container {
    width: 1050px;
    height: 100%;
    margin: 0 auto;
    text-align: center;

    .title {
      font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #35495e;
      letter-spacing: 1px;
    }
  }
}
</style>
