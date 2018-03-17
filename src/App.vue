<template>
  <div id="app" class="main-container">
    <div class="container loading" :class="{done: !loading}">
      <div class="row justify-content-center">
        <div class="col col-md-6">
          <header>
            <div class="row">
              <div class="col text-center">
                <h1 class="m-0">Alexander Shchegol</h1>
                <p>Frontend Developer from scratch</p>
              </div>
            </div>

            <main-menu></main-menu>
          </header>

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
  import { createBlob } from './assets/js/common'

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
          numPoints: 5,
          centerX: 500,
          centerY: 500,
          minRadius: 400,
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
          '#FF5722', '#795548',
          '#9E9E9E', '#607D8B'
        ]

        this.colorNum = getRandomInt(colors.length, this.colorNum)

        this.$refs.blob.style.fill = colors[this.colorNum]
        this.$refs.bg.style.backgroundColor = colors[this.colorNum]
      }
    }
  }

  let getRandomInt = (max, oldNum) => {
    let newNum = Math.floor(Math.random() * max)
    return newNum === oldNum ? getRandomInt(max, oldNum) : newNum
  }
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>
