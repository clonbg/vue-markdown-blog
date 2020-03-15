<template>
<div class="container">
  <div class="content"></div>
  <footer class="row">
    <div class="sozial col-xs-12 col-sm-4 col-sm-push-6">
      <ul class="row">
        <li class="col-xs-6 col-sm-2">
          <a href="https://twitter.com/clonbg1" target="_blank">
            <img class="logo" src="@/icons/twitter-brands.svg">
          </a>
        </li>
        <li class="col-xs-6 col-sm-2">
        </li>
        <li class="col-xs-6 col-sm-2">
          <a href="https://github.com/clonbg?tab=repositories" target="_blank">
            <img class="logo" src="@/icons/github-alt-brands.svg">
          </a>
        </li>
        <li class="col-xs-6 col-sm-2">
        </li>
        <li class="col-xs-6 col-sm-2">
          <a href="mailto:clonbg@gmail.com" target="_blank">
            <img class="logo" src="@/icons/at-solid.svg">
          </a>
        </li>
      </ul>
    </div><!-- Ende Sozial media -->
    
    <div class="copyright col-xs-12 col-sm-4 col-sm-pull-6">
      <p> &copy; Clonbg </p>
    </div><!-- Ende Copyright -->
    
    <div class="impressum col-xs-12 col-sm-4 col-sm-pull-6">
      <p> Hasta el infinito </p>
      <p> y más allá¡¡ </p>
    </div><!-- Ende Impressum -->
  </footer>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
body
{
  background-color: wheat;
}
li
{
  list-style-type: none;
  margin-left: 1vw;
}

li:first-child
{
  margin:0;
}

footer
{
  padding-top: 5vh;
  padding-bottom: 2vh;
}

.content
{
  height: 20vh;
  background-color: lightgray;
}

.container
{
  background-color: beige;
}

.copyright,  .impressum
{
  text-align: center;
}

.logo
{
  height: 8vh;
    
}

@media (max-width: 768px) 
{
  li
  {
    margin-left: 0;
    margin-bottom: 1vh;
  }
  
  .sozial
  {
    margin-bottom: 1vh;
  }
}
</style>
