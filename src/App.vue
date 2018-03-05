<template>
  <div id="app" class="container main-container">
    <div class="row justify-content-center">
      <div class="col-6">
        <header>
          <div class="row">
            <div class="col text-center">
              <h1 class="m-0">Александр Щеголь</h1>
              <p>Frontend Developer</p>
            </div>
          </div>

          <main-menu></main-menu>
        </header>

        <router-view/>
      </div>
    </div>

    <svg id="svg" viewBox="0 0 1000 1000">
      <path id="blob" ref="blob"></path>
    </svg>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu'
  import { createBlob } from './assets/js/common'

  export default {
    components: {MainMenu},
    name: 'App',
    data () {
      return {
        blob: null
      }
    },
    mounted () {
      let self = this

      self.blob = createBlob({
        element: self.$refs.blob,
        numPoints: 5,
        centerX: 500,
        centerY: 500,
        minRadius: 300,
        maxRadius: 325,
        minDuration: 5,
        maxDuration: 10
      })
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>
