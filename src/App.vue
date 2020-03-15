<template>
  <div id="app">
    <div>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '@/views/Footer.vue'
export default {
  name: '#app',
  components: {
    Footer
  }
}
</script>

<style scoped>
#app {
  font-family: 'Ubuntu', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 120vw;
  margin: 0 auto;
}

</style>
