<template>
  <footer class="footer">
    <div class="footer-container">
      <h2 class="title">
        {{ title }}
      </h2>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Footer'
})
export default class extends Vue {
  private title: string = 'hello world'
}
</script>

<style lang="scss" scoped>
.footer {
  &-container {
    text-align: center;
    color: cyan;
  }
}
</style>
