<template>

  <div id="app">
    <div>
      <Menu class="menu" />
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <!-- <router-view/> -->
      <Footer />
    </div>
  </div>

</template>

<script>

  import Footer from '@/views/Footer.vue'
  import Menu from '@/views/Menu.vue'
  export default {
    name: 'app',
    components: {
      Footer,
      Menu
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
  .menu {
    display: flex;
    margin: 0 auto;
    min-width: min-content;
    max-width: 100vh;
  }

</style>
