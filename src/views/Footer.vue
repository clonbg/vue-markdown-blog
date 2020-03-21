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
      publicPath: process.env.BASE_URL,
      rss: `&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
        &lt;rss version=&quot;2.0&quot; xmlns:atom=&quot;http://www.w3.org/2005/Atom&quot;&gt;
        &lt;channel&gt;
        &lt;title&gt;NorfiPC&lt;/title&gt; 
        &lt;link&gt;http://norfipc.com&lt;/link&gt; 
        &lt;description&gt;&#218;ltimas p&#225;ginas publicadas en el sitio web NorfiPC, relacionadas con contenido t&#233;cnico, informaci&#243;n para internet, las redes sociales, el uso de Windows, computadoras en general y dispositivos portables. &lt;/description&gt; 
        &lt;atom:link href=&quot;https://norfipc.com/rss.xml&quot; rel=&quot;self&quot; type=&quot;application/rss+xml&quot;/&gt;
        &lt;language&gt;es-ES&lt;/language&gt;
        &lt;image&gt;
        &lt;title&gt;NorfiPC&lt;/title&gt; 
        &lt;url&gt;http://norfipc.com/img/logo-norfipc.png&lt;/url&gt; 
        &lt;link&gt;http://norfipc.com&lt;/link&gt; 
        &lt;width&gt;144&lt;/width&gt; 
        &lt;height&gt;65&lt;/height&gt; 
        &lt;/image&gt;
        &lt;item&gt;
          &lt;title&gt;Bots de Telegram, los mejores y m&#225;s populares&lt;/title&gt;
          &lt;link&gt;https://norfipc.com/trucos/bots-de-telegram-los-mejores-mas-populares.php&lt;/link&gt;
          &lt;pubDate&gt;Tue, 17 Mar 2020 10:33:26 -0400&lt;/pubDate&gt;		
            &lt;description&gt;&lt;![CDATA[&lt;img src=&quot;https://norfipc.com/img/social/telegram-los-mejores-bots.jpeg&quot; class=&quot;webfeedsFeaturedVisual&quot; alt=&quot;&quot; /&gt;&lt;p&gt;Selecci&#243;n y lista de los chatbots m&#225;s &#250;tiles y empleados, en versiones m&#243;viles y en la computadora para descargar video y m&#250;sica, planificar tareas y otras.&lt;/p&gt;]]&gt;&lt;/description&gt;
          &lt;guid&gt;https://norfipc.com/img/social/telegram-los-mejores-bots.jpeg&lt;/guid&gt;
        &lt;/item&gt;

        &lt;/channel&gt;
        &lt;/rss&gt;`
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
