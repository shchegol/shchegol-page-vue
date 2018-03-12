<template>
  <main class="row">
    <section class="col">
      <h3>
        About
      </h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus assumenda consequatur odit omnis quas. Culpa eveniet, id ipsa laboriosam quas qui rerum. Ab blanditiis error molestiae,
        molestias nesciunt placeat repellendus?
      </p>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'skills',
    mounted() {
      this.$parent.$refs.blob.style.fill = '#2196F3'
    }
  }
</script>
