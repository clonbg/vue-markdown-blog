<template>
  <div class="home">
    <h1 class="headline center letra">El blog de Clonbg</h1>
    <img src="../assets/logo_clonbg_es.jpg" class="img-fluid" alt="Logo" />
    <div class="row">
      <div class="col-md-10 mx-auto">
        <div class="sections">
          <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
            <h2 class="center">{{section}}</h2>
            <div class="section" v-for="entry in entries[section]" :key="entry.id">
              <div class="entry">
                <div class="row mx-auto">
                  <h3 class="text-decoration-none" @click="$router.push({name: entry.id})">
                    <div class="row mx-auto p-0">
                      <div class="col-6 mx-auto p-0">
                        <img :src="`${publicPath}${entry.id}${entry.imagen}`" class="img-fluid" />
                      </div>
                      <div style="float:left; display:inline;">
                        <div
                          class="alert alert-light tamanoTitulo p-0 m-0 mt-2"
                          role="alert"
                        >{{entry.title}}</div>
                      </div>
                    </div>
                  </h3>

                  <span class="subtitle p2-2 ml-0 text-success">{{entry.date}}</span>
                  <p>{{entry.description}}</p>
                </div>
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
  border: #508d76 solid;
  padding: 0;
}
.tamanoTitulo {
  max-width: 500px;
  font-size: 80%;
}
.letra {
  font-family: "Dancing Script", cursive;
}
</style>