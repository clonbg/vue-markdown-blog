<template>
  <div class="home">
    <h1 class="headline center">El blog de Clonbg</h1>
    <img src="../assets/logo_clonbg_es.jpg" class="img-fluid" alt="Logo" />
    <div class="row">
      <div class="col-md-10 mx-auto">
        <div class="sections">
          <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
            <h2 class="center">{{section}}</h2>
            <div class="section" v-for="entry in entries[section]" :key="entry.id">
              <div class="entry">
                <div class="row mx-auto">
                  <h3 @click="$router.push({name: entry.id})">
                    <div class="row mx-auto mb-2">
                      <div class="col-6 tamanoTitulo">{{entry.title}}</div>
                      <div class="col-6">
                        <img
                          :src="`${publicPath}${entry.id}${entry.imagen}`"
                          class="img-fluid float-md-right"
                        />
                      </div>
                      <div class="row">
                        
                        <div class="col-12"><span class="subtitle ml-4">{{entry.date}}</span></div>
                      </div>
                    </div>
                  </h3>
                </div>
                <p>{{entry.description}}</p>
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
  font-size: 4rem;
}
img {
  display: block;
  margin: 0 auto;
  width: 300px;
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
    float: right;
    font-weight: normal;
    margin-bottom: 3px;
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
  width: 300px;
}
.borde {
  border: #35495e solid;
  padding: 0;
}
.tamanoTitulo {
  max-width: 500px;
}
</style>