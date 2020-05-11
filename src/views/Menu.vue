<template>
  <div>
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger @click="$router.push({name: 'home'})">Inicio</md-button>
    </md-menu>

    <md-menu md-direction="bottom-end">
      <md-button md-menu-trigger><a :href="`${publicPath}feedClonbg_es.xml`" target="_blank">
      <img class="rssCabecera" src="@/icons/rss2.svg" width="100"/>
    </a></md-button>
    </md-menu>
    <!-- <md-menu md-direction="bottom-end">
      <md-button md-menu-trigger>Acerca de</md-button>
    </md-menu> -->
<!--
    <md-menu md-direction="top-start">
      <md-button md-menu-trigger>Top Start</md-button>
    </md-menu>

    <md-menu md-direction="top-end">
      <md-button md-menu-trigger>Top End</md-button>
    </md-menu> -->
  </div>
</template>

<script>
  export default {
    name: 'Directions',
    data() {
      return {
        publicPath: process.env.BASE_URL
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-menu {
    margin: 24px;
  }
  .rssCabecera {
    max-width: 4vW;
    text-align: right
  }
</style>
