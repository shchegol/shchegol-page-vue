<template>
  <div class="row justify-content-center">
    <div class="col-auto">
      <nav class="main-menu">
        <ul class="main-menu__list">
          <li class="main-menu__item">
            <router-link to="/" active-class="main-menu__link_active" class="main-menu__link" exact>Contacts</router-link>
          </li>

          <li class="main-menu__item">
            <router-link to="/about" active-class="main-menu__link_active" class="main-menu__link">About</router-link>
          </li>

          <li class="main-menu__item">
            <router-link to="/skills" active-class="main-menu__link_active" class="main-menu__link">Skills</router-link>
          </li>
        </ul>
        <div class="main-menu__underline"></div>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main-menu',
    data() {
      return {
        firstCall: true
      }
    },
    watch: {
      $route() {
        setTimeout(() => {
          this.changeUnderline()
        }, 100)
      }
    },
    methods: {
      changeUnderline() {
        let underline = document.getElementsByClassName('main-menu__underline')[0];
        let activeLink = document.getElementsByClassName('main-menu__link_active')[0];

        underline.style.transform = `translateX(${activeLink.offsetLeft}px)`;
        underline.style.width = `${activeLink.clientWidth}px`;
      }
    }
  }
</script>
