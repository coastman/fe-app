<template>
  <div class="app-main">
    <Header />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './Header.vue'

@Component({
  name: 'Main',
  components: {
    Header
  }
})

export default class App extends Vue {
  name: string = '1'

  public setName () {
    this.name = '2'
  }
}
</script>
