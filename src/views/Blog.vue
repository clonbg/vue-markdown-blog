<template>
  <div class="blog">
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Atrás</router-link>
  </div>
</template>

<script>
/* eslint-disable */
import BLOGENTRIES from "@/statics/data/blogs.json";

export default {
  name: "home",
  components: {},
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
  margin-top: 0;

  .back {
    background-color: #42b883;
    color: white;
    margin-top: 5rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    border-radius: 0.5rem;
    display: inline-block;
    transition: all 0.3s ease;
    &:hover {
      background-color: transparent;
      color: #42b883;
    }
  }
  /deep/ {
    h1 {
      font-size: 3rem;
      margin-bottom: 0.2rem;
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
      border-radius: 0.3rem;
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
