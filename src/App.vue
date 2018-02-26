<template>
  <div id="app" class="container main-container">
    <div class="row justify-content-center">
      <div class="col-8 card">
        <div class="row">
          <header class="col text-center">
            <h1 class="m-0">Alexander Shchegol</h1>
            <p>Frontend Developer</p>
          </header>
        </div>

        <main-menu></main-menu>

        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import MainMenu from './components/MainMenu'

  export default {
    components: {MainMenu},
    name: 'App'
  }
</script>

<style lang="scss">
  @import './assets/scss/app.scss';
</style>
