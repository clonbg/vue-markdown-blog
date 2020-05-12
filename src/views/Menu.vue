<template>

  <div>

    <md-menu md-direction="bottom-start" class="posicionLogo">
      <md-button md-menu-trigger>
        <img src="../assets/logo_clonbg_es.jpg" @click="$router.push({name: 'home'})" class="img-fluid logo" alt="Logo" />
      </md-button>
    </md-menu>

    <md-menu md-direction="bottom-end" class="posicionTitulo">
      <md-button md-menu-trigger>
        <h1>El blog de Clonbg</h1>
      </md-button>
    </md-menu>
    <div class="espaciador">

    </div>
    <!-- <md-menu md-direction="top-start" @click="$router.push({name: 'acerca'})" class="posicionAcerca">Acerca de</md-button>
    </md-menu> -->

    <md-menu md-direction="top-end" class="rssCabecera">
      <md-button md-menu-trigger><a :href="`${publicPath}feedClonbg_es.xml`" target="_blank">
            <img class="tamanoRss" src="@/icons/rss2.svg" width="100"/>
          </a></md-button>
    </md-menu>

    <!-- <md-menu md-direction="top-end">
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
    margin-left: 0;
    margin-right: 0;
  }
  .tamanoRss {
    max-width: 25px;
  }
  .rssCabecera {
    float: right;
  }
  .logo {
    max-width: 60px;
  }
  .posicionLogo {
    float: left;
  }
  .posicionAcerca {
    float: right;
    width: 117px;
    margin-top: 3.6vh;
  }
  h1 {
    font-size: 2vh;
  }
  .espaciador {
    width: 100%;
  }

</style>
