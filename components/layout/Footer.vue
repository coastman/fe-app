<template>
  <footer class="footer">
    <div class="footer-container">
      <h3 class="title">
        {{ title }}
      </h3>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Footer'
})
export default class extends Vue {
  private title: string = 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  &-container {
    text-align: center;
  }
}
</style>
