<template>
  <header id="navigation">
  <div class="header-wrapper">
    <div class="logo">
      <h1>
        <router-link class="nav-link" :to="{ name: 'home'}">Marlena Baker</router-link>
      </h1>
      <small>Web Developer <i class="fa fa-times" aria-hidden="true"></i> Project Manager</small>
    </div>
    <div class='icon-wrapper'>
      <ul class="icon-list-style">
        <li><a href="mailto:baker.marlena@gmail.com"><img class="social-icon" src="../../static/social/email.png" alt="email"></a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/marlenabaker"><img class="social-icon" src="../../static/social/linkedin.png" alt="linkedin"></a></li>
        <li><a target="_blank" href="https://github.com/baker-marlena"><img class="social-icon" src="../../static/social/github.png" alt="github"></a></li>
        <li><a target="_blank" href="https://twitter.com/marlena_baker2"><img class="social-icon" src="../../static/social/twitter.png" alt="twitter"></a></li>
      </ul>
    </div>
  </div>
  <div>
    <ul class="nav-list-style">
      <li>
        <router-link class="nav-link" :to="{ name: 'home'}"><b class="resume-link">Project List</b></router-link>
      </li>
      <li>
        /
      </li>
      <li>
        <router-link class="nav-link" :to="{ name: 'community'}"><b class="resume-link">Community Involvement</b></router-link>
      </li>
      <li>
        /
      </li>
      <li>
        <router-link class="nav-link" :to="{ name: 'teaching'}"><b class="resume-link">Education</b></router-link>
      </li>
      <li>
        /
      </li>
      <li><router-link class="nav-link" :to="{ name: 'resume'}"><b class="align-right resume-link">
        Resume
      </b></router-link></li>
    </ul>
  </div>
  </header>
</template>
<script>
export default {
  name: 'navigation',
  data() {
    return {
      hideLink: this.$route.name,
    };
  },
  mounted() {
    /*eslint-disable*/
    console.log(this.$route.name);
  },
};
</script>
<style scoped>
  .header-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
  }
  .social-icon {
    height: 50px;
    width: auto;
  }
  h1 {
    color: #71D6E4;
  }
  small {
    color:black;
    font-size: 1rem;
  }
  .icon-wrapper {
    padding: 0 50px 0 10px;
  }
  .icon-list-style {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .nav-list-style {
    list-style:none;
  }
  .nav-list-style li {
    display: inline-block;
    margin: 5px;
  }
  .hidden {
    display: none;
  }
  .nav-link{
    color: #71D6E4;
    text-decoration: none;
  }
  .nav-link:hover{
    text-decoration: none;
    color: #325E64;
  }
</style>
