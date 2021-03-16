<template>
  <div class="container-fluid text-lg-left "> 
    <h1>Hi,</h1>
    <h1>I'm 
      <a href="https://www.linkedin.com/in/shanmanage/" target="_blank" style="text-decoration: none;">Ishara Lakshan </a>
    </h1>
    <div class="col-md-6">
      <div class="row">
        <h1>and I build things
          <router-link to="/projects" target="_blank"><i class="fas fa-arrow-right" style='font-size:25px; color: #424242' ></i></router-link></h1>
      </div>
    </div>
    <br><br>
    <h3>
      Have a look at my
      <a href="../../static/resume.pdf" target="_blank" style="text-decoration: none;">resume</a>
      and consider hiring me, :)
    </h3>    
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-fluid{
    padding-top: 200px;
    padding-left: 200px;
    height: 100vh;
    background-image: linear-gradient(to top right, #fdfcfb,#9E9E9E);
  }
</style>
