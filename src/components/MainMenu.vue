<template>
  <div class="row justify-content-center">
    <div class="col-auto">
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__item">
            <router-link to="/" active-class="menu__link_active" class="menu__link" exact>Contacts</router-link>
          </li>

          <li class="menu__item">
            <router-link to="/about" active-class="menu__link_active" class="menu__link">About</router-link>
          </li>

          <li class="menu__item">
            <router-link to="/skills" active-class="menu__link_active" class="menu__link">Skills</router-link>
          </li>
        </ul>
        <div ref="underline" class="menu__underline loading" :class="{done: !firstCall}"></div>
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
    mounted() {
      setTimeout(() => {
        this.changeUnderline();
        this.firstCall = false;
      }, 1000)
    },
    watch: {
      $route() {
        if(this.firstCall) return;
        this.$nextTick(()=>{
          this.changeUnderline()
        })
      }
    },
    methods: {
      changeUnderline() {
        let underline = this.$refs.underline;
        let activeLink = document.getElementsByClassName('menu__link_active')[0];
        underline.style.transform = `translateX(${activeLink.offsetLeft}px)`;
        underline.style.width = `${activeLink.clientWidth}px`;
      }
    }
  }
</script>
