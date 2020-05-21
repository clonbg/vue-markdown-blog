<template>

  <div>

    <md-menu md-direction="bottom-start" class="posicionLogo"  @click="$router.push({name: 'home'})">
      <md-button md-menu-trigger>
        <img src="../assets/logo_clonbg_es.jpg" class="logo" alt="Logo" />
      </md-button>
    </md-menu>

    <md-menu md-direction="bottom-end">
      <md-button md-menu-trigger disabled>
        <h1 @click="$router.push({name: 'home'})">El blog de Clonbg</h1>
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

<style lang="css" scoped>

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
  .nohover:hover {
    border: 0;
  }
  .posicionLogo {
    float: left;
    margin-right: 12px;
  }
  .posicionAcerca {
    float: right;
    width: 117px;
    margin-top: 3.6vh;
  }
  h1 {
    font-size: 2vh;
    cursor: none;
    color: black;
  }
  .espaciador {
    width: 100%;
  }
  .md-button:not([disabled]).md-focused::before, .md-button:not([disabled]):active::before, .md-button:not([disabled]):hover::before {
    background-color: white;
    opacity: .12;
  }
</style>
