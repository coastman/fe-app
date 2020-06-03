<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        fe-app
      </h1>
      <h2 class="subtitle">
        My amazing Nuxt.js project
      </h2>
      <button @click="setName">
        ddsds
      </button>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">
          {{ name - 1 }}
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})

export default class App extends Vue {
  name: string = '1'

  public setName () {
    this.name = '2'
  }
}
</script>

<style lang="scss">

.container {
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
