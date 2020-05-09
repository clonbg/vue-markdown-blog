<template>
  <div>
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger @click="$router.push({name: 'home'})">Inicio</md-button>
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
    name: 'Directions'
  }
</script>

<style lang="scss" scoped>
  .md-menu {
    margin: 24px;
  }
</style>
