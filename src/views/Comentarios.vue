<template>

  <div>
    <div id="disqus_thread"></div>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  </div>

</template>

<script>

  export default {
    name: 'Comentarios',
    created() {
      var disqus_config = function() {
        this.page.url = window.location.href // Url de tu sitio web
        this.page.identifier = window.location.href // Url de tu sitio web
      }
      ;(function() {
        var d = document,
          s = d.createElement('script')
        s.src = 'https://https-silly-goldberg-68d2eb-netlify-app.disqus.com/embed.js'
        s.setAttribute('data-timestamp', +new Date())
        ;(d.head || d.body).appendChild(s)
      })()
    }
  }

</script>
