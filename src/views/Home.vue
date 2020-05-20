<template>

  <div class="home">
    <div class="container">
      <div class="row headline letra d-flex justify-content-center">
        <!-- https://vuematerial.io/components/app -->

      </div>
    </div>

    <div class="row">
      <div class="mx-auto">
        <div class="sections">
          <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
            <!-- <h2 class="center">{{section}}</h2> -->
            <div class="section" v-for="(entry, num) in entries[section]" :key="entry.id">
              <div v-if="num<contador && num>=contador-10" class="entry">
                <h3 class="text-decoration-none" @click="$router.push({name: entry.id})">
                  <div class="d-flex justify-content-center">
                    <div class="d-flex flex-column bd-highlight mb-3">
                      <div class="p-2 bd-highlight">
                        <img :src="`${publicPath}${entry.id}${entry.imagen}`" class="img-fluid" />
                      </div>
                      <div class="p-2 bd-highlight">
                        <div v-html="entry.title"
                             class="alert alert-light tamanoTitulo p-0 m-0 mt-2"
                             role="alert"></div>
                      </div>
                      <div class="p-0 m-0 bd-highlight">
                        <span class="subtitle text-success">{{entry.date}}</span>
                        <span class="categorias" v-for="item in entry.categorias" :key="item.id">
                                    <div class="inline">
                                      <i class="fa fa-star fa-lg fa-spin"></i>
                                      <span class="pl-2">{{item}}</span>
                      </div>
                      </span>
                    </div>
                  </div>
              </div>
              </h3>
              <div class="container-fluid margen-descripcion">
                <div @click="$router.push({name: entry.id})" v-html="entry.description" class="mx-auto col-lg-7 text-justify"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="mx-auto botones">
      <label class="botonera" @click="avanceFinal" :class="{colorGris: computedAdelante}">&lt;&lt;</label>
      <label class="botonera" @click="avanceUno" :class="{colorGris: computedAdelante}">&lt;</label>
      <label class="numPag">{{contador/10}}</label>
      <label class="botonera" @click="atrasUno" :class="{colorGris: computedAtras}">&gt;</label>
      <label class="botonera" @click="avanceInicio" :class="{colorGris: computedAtras}">&gt;&gt;</label>
    </div>
    {{contador}}

  </div>
  </div>

</template>

<script>

  /* eslint-disable */
  import BLOGENTRIES from '@/statics/data/blogs.json'

  export default {
    name: 'home',
    components: {
      BLOGENTRIES
    },
    data() {
      return {
        publicPath: process.env.BASE_URL,
        contador: 10,
        atras: false,
        adelante: false
      }
    },
    methods: {
      atrasUno() {
        if(this.contador>10){
        this.contador = this.contador - 10
        }
      },
      avanceUno() {
        if (this.contador<=BLOGENTRIES.stories.length) {
          this.contador = this.contador + 10;
        }
      },
      avanceFinal(){
        this.contador = (parseInt(BLOGENTRIES.stories.length/10)+1)*10
        //console.log(this.contador)
      },
      avanceInicio(){
        this.contador = 10
        //console.log(this.contador)
      }
    },
    computed: {
      entries() {
        return BLOGENTRIES;
      },
      computedAtras(){
        if(this.contador<11){
          this.atras=true
        } else {
          this.atras=false
        }
        return this.atras
      },
      computedAdelante(){
        if(this.contador>=BLOGENTRIES.stories.length){
          this.adelante=true
        } else {
          this.adelante=false
        }
        return this.adelante
      }
    }
  }

</script>
<style lang="scss" scoped>

  .center {
    text-align: center;
  }
  .headline {
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    font-size: 3rem;
    margin-top: 1rem;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 60vh;
  }

  h2 {
    color: #35495e;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }

  h3 {
    padding-left: 1vh;
    padding-right: 1vh;
    color: #42b883;
    margin-bottom: 0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    .subtitle {
      color: grey;
      font-size: 0.98rem;
    }
  }
  .botonera {
    padding-left: 1vh;
    padding-right: 1vh;
    color: #42b883;
    margin-bottom: 0;
    cursor: pointer;
    font-size: 3vH;
    &:hover {
      text-decoration: underline;
    }
  }
  .numPag {
    padding-left: 1vh;
    padding-right: 1vh;
    color: #42b883;
    margin-bottom: 0;
    cursor: auto;
    font-size: 3vH;
    &:hover {
      text-decoration: none;
    }
  }
  .colorGris{
    color:    #b9b3b1;
    cursor: auto;
    &:hover {
      text-decoration: none;
    }
  }

  p {
    margin-top: 0.4rem;
  }

  .sections {
    max-width: 80vw; //Anchura del articulo desde esta vista
    margin: 0 auto;
    margin-top: 4rem;
  }

  .section {
    margin-bottom: 6rem;
  }

  .group {
    margin-bottom: 4rem;
  }

  .tamanoImg {
    width: 300vh;
  }
  .borde {
    border: #508d76 solid;
    padding: 0;
  }
  .tamanoTitulo {
    max-width: 500vh;
    font-size: 80%;
  }
  .letra {
    font-family: 'Dancing Script', cursive;
  }
  .categorias {
    color: brown;
    font-size: 15px;
    margin-left: 5%;
  }
  .inline {
    display: inline-block;
  }
  .margen-descripcion {
    padding-left: 0;
  }
  .botones {
    padding-bottom: 10vh;
    display: inline-flex;
  }

</style>
