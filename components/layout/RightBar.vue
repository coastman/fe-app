<template>
  <div class="right-bar">
    <!-- sd -->
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({ name: 'RightBar' })

export default class extends Vue {}
</script>

<style lang="scss" scoped>
  .right-bar {
    width: 264px;
    height: 600px;
    float: right;
  }
</style>
