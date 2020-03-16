<template>
  <div class="home">
    <h1 class="headline center letra mb-n1">El blog de Clonbg</h1>
    <img src="../assets/logo_clonbg_es.jpg" class="img-fluid logo" alt="Logo" />
    <div class="row">
      <div class="col mx-auto">
        <div class="sections">
          <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
            <!-- <h2 class="center">{{section}}</h2> -->
            <div class="section" v-for="entry in entries[section]" :key="entry.id">
              <div class="entry">
                <h3
                  class="text-decoration-none"
                  @click="$router.push({name: entry.id})"
                >
                  <div class="d-flex justify-content-center">
                    <div class="d-flex flex-column bd-highlight mb-3">
                      <div class="p-2 bd-highlight">
                        <img :src="`${publicPath}${entry.id}${entry.imagen}`" class="img-fluid" />
                      </div>
                      <div class="p-2 bd-highlight">
                        <div
                          class="alert alert-light tamanoTitulo p-0 m-0 mt-2"
                          role="alert"
                        >{{entry.title}}</div>
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

                <div v-html="entry.description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "@/statics/data/blogs.json";

export default {
  name: "home",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },

  methods: {},
  computed: {
    entries() {
      return BLOGENTRIES;
    }
  }
};
</script>
<style lang="scss" scoped>
.center {
  text-align: center;
}
.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 3rem;
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

p {
  margin-top: 0.4rem;
}

.sections {
  max-width: 50vw; //Anchura del articulo desde esta vista
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
  font-family: "Dancing Script", cursive;
}
.categorias {
  color: brown;
  font-size: 15px;
  margin-left: 5%;
}
.inline {
  display: inline-block;
}
.logo {
  width: 30vh;
  margin-top: 3vh;
}
</style>