<template>
  <div class="blog">
    <router-view />
        <Comentarios/>
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>

  </div>
</template>

<script>
import Comentarios from "@/views/Comentarios.vue";

export default {
  name: "home",
  components: {
    Comentarios
  },
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
  },
  mounted() {
    var links = document.links;
    //Código que sirve par añadir target="_blank a los enlaces"
    for (var i = 0; i < links.length; i++) {
      if (!links[i].target) {
        if (
          links[i].hostname !== window.location.hostname ||
          /\.(?!html?)([a-z]{0,3}|[a-zt]{0,4})$/.test(links[i].pathname)
        ) {
          links[i].target = "_blank";
        }
      }
    }
  }

};
</script>

<style lang="scss" scoped>
.blog {
  max-width: 80vw;
  margin: 10rem auto;

  .back {
    background-color: #42b883;
    color: white;
    margin-top: 5rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    border-radius: .5rem;
    display: inline-block;
    transition: all .3s ease;
    &:hover {
      background-color: transparent;
      color: #42b883;
    }
  }
  /deep/ {
    h1 {
      font-size: 3rem;
      margin-bottom: .2rem;
      color: #42b883;
    }
    h4 {
      margin-bottom: 3rem;
      color: #35495e;
    }
    pre {
      overflow-x: auto;
      background-color: #35495e;
      color: white;
      border-radius: .3rem;
      padding: 1rem;
    }
    img {
    max-width: 100%;
    margin: 0 auto;
    display: block;

    }
  }
}
</style>
