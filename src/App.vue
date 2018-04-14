<template>
  <div id="app" class="main-container">
    <div class="container loading" :class="{done: !loading}">
      <div class="row justify-content-center">
        <div class="col col-md-6">
          <div class="row">
            <header class="col text-center">
              <p @click="initBlob">Frontend Developer</p>
              <h1 class="main-title" @click="removeBlob">Alexander Shchegol</h1>
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
    <div class="copyright loading" :class="{done: !loading}">&copy; 2000&nbsp;&mdash;&nbsp;{{ year }} Alexander Shchegol</div>
    <div ref="bg" class="background d-block d-md-none"></div>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu'
  import { randomNotRepeat, random } from './assets/js/common'
  import Blob from './assets/js/blob'

  export default {
    components: {MainMenu},
    name: 'App',
    data () {
      return {
        blob: null,
        loading: true,
        colorNum: 0,
        year: '2018'
      }
    },
    mounted () {
      if (this.$el.clientWidth > 767) {
        this.initBlob()
      }

      setTimeout(() => {
        this.loading = false
      }, 200)
    },
    watch: {
      $route () {
        this.changeColor()
      }
    },
    methods: {
      initBlob () {
        let self = this

        this.blob = Blob.init({
          element : self.$refs.blob,
          numPoints: Math.floor(random(3, 5))
        })
      },
      removeBlob() {
        this.blob.destroy()
      },
      changeColor () {
        let colors = [
          '#f44336',
          '#E91E63',
          '#9C27B0',
          '#673AB7',
          '#3F51B5',
          '#2196F3',
          '#03A9F4',
          '#00BCD4',
          '#009688',
          '#4CAF50',
          '#8BC34A',
          '#CDDC39',
          '#FFFF00',
          '#FFEB3B',
          '#FFC107',
          '#FF9800',
          '#FF5722'
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
