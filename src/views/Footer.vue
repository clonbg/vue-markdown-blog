<template>
  <div class="container">
    <div class="content"></div>
    <footer class="row">
      <div class="container">
        <div class="row row-cols-3 sozial">
          <!-- Columna 1 -->
          <div class="col">
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                <div class="col">
                  <a href="https://twitter.com/clonbg1" target="_blank">
                    <img class="logo" src="@/icons/twitter-brands.svg" />
                  </a>
                </div>
                <div class="col">
                  <a href="https://github.com/clonbg?tab=repositories" target="_blank">
                    <img class="logo" src="@/icons/github-alt-brands.svg" />
                  </a>
                </div>
                <div class="col">
                  <a :href="`${publicPath}feedClonbg_es.xml`" target="_blank">
                    <img class="logo" src="@/icons/rss.svg" />
                  </a>
                </div>
                <div class="col">
                  <a href="mailto:clonbg@gmail.com" target="_blank">
                    <img class="logo" src="@/icons/at-solid.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Columna 2 -->

          <div class="col copyright">&copy; Clonbg</div>
          <!-- Columna 3 -->

          <div class="col impressum">
            <p>Hasta el infinito</p>
            <p>y más allá!!</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style scoped>
body {
  background-color: wheat;
}
li {
  list-style-type: none;
}

li:first-child {
  margin: 0;
}

footer {
  padding-top: 5vh;
  padding-bottom: 2vh;
}

.content {
  height: 10vh;
  background-color: lightgray;
}

.container {
  background-color: beige;
}

.copyright,
.impressum {
  text-align: center;
}

.logo {
  height: 8vh;
}

@media (max-width: 768px) {
  li {
    margin-left: 0;
    margin-bottom: 1vh;
  }

  .sozial {
    margin-bottom: 1vh;
  }
}
</style>
