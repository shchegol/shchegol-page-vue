<template>
  <div id="app" class="main-container">
    <div class="container loading" :class="{done: !loading}">
      <div class="row justify-content-center">
        <div class="col col-md-6">
            <div class="row">
              <header class="col text-center">
                <p class="">Frontend Developer</p>
                <h1 class="main-title">Alexander Shchegol</h1>
              </header>
            </div>

            <main-menu></main-menu>

          <router-view/>
        </div>
      </div>
    </div>

    <svg class="blob" viewBox="0 0 1000 1000">
      <path class="blob__item " ref="blob"></path>
    </svg>
    <div class="background d-block d-md-none" ref="bg"></div>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu'
  import { createBlob, randomNotRepeat, random } from './assets/js/common'

  export default {
    components: {MainMenu},
    name: 'App',
    data () {
      return {
        blob: null,
        loading: true,
        colorNum: 0
      }
    },
    mounted () {
      if (this.$el.clientWidth > 767) {
        this.initBlob()
      } else {
        window.addEventListener('resize', this.handleResize)
      }

      this.changeColor()
      this.loading = false
    },
    watch: {
      $route () {
        this.changeColor()
      }
    },
    methods: {
      handleResize () {
        if (this.$el.clientWidth > 767 && this.blob === null) {
          this.initBlob()
        }
      },
      initBlob () {
        let self = this

        self.blob = createBlob({
          element: self.$refs.blob,
          numPoints:  Math.floor(random(3, 6)),
          centerX: 500,
          centerY: 500,
          minRadius: 385,
          maxRadius: 425,
          minDuration: 8,
          maxDuration: 10
        })
      },
      changeColor () {
        let colors = [
          '#f44336', '#E91E63',
          '#9C27B0', '#673AB7',
          '#3F51B5', '#2196F3',
          '#009688', '#4CAF50',
          '#8BC34A', '#FF9800',
          '#FF5722', '#795548'
        ]

        this.colorNum = randomNotRepeat(colors.length, this.colorNum)

        this.$refs.blob.style.fill = colors[this.colorNum]
        this.$refs.bg.style.backgroundColor = colors[this.colorNum]
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>
