<template>
  <div id="app" class="container main-container">
    <div class="row justify-content-center">
      <div class="col-8 card">
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
