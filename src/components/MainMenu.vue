<template>
  <nav>
    <menu class="main-menu">
      <li class="main-menu__item">
        <router-link to="/about" active-class="main-menu__link_active" class="main-menu__link" exact>О себе</router-link>
      </li>

      <li class="main-menu__item">
        <router-link to="/skills" active-class="main-menu__link_active" class="main-menu__link">Навыки</router-link>
      </li>
    </menu>
  </nav>
</template>

<script>
  export default {
    name: 'main-menu'
  }
</script>

<style scoped>

</style>
