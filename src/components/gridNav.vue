<template>
  <header id="navigation">
  <div class="header-wrapper">
    <div class="logo">
      <h1>
        <router-link class="nav-link" :to="{ name: 'home'}">Marlena Baker</router-link>
      </h1>
      <div class='subhead-wrapper'>
        <p>Web Developer <i class="fa fa-times" aria-hidden="true"></i></p> <p class="slidingVertical">
          <span>Project Manager</span>
          <span>Educator</span>
          <span>Designer</span>
          <span>Founder</span>
          </p>
        </div>
    </div>
    <div class='icon-wrapper'>
      <ul class="icon-list-style">
        <li @click="openEmail"><a><i class="fas fa-3x fa-envelope"></i></a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/marlenabaker"><i class="fab fa-3x fa-linkedin-in"></i></a></li>
        <li><a target="_blank" href="https://github.com/baker-marlena"><i class="fab fa-3x fa-github"></i></a></li>
        <li><a target="_blank" href="https://twitter.com/marlena_baker2"><i class="fab fa-3x fa-twitter"></i></a></li>
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
        <router-link class="nav-link" :to="{ name: 'teaching'}"><b class="resume-link">Teaching</b></router-link>
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
  props: {
    openEmail: {
      type: Function,
      required: true,
    },
  },
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
  .icon-list-style a {
    color: #1e9099 !important;
  }
  .logo {
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
  }
  h1 {
    color: #b14280;
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
    display: inline;
  }
  .subhead-wrapper {
    text-align: center;
    margin-left: -125px;
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
    padding: 0;
  }
  .nav-list-style {
    list-style:none;
    text-align: center;
  }
  .nav-list-style li {
    display: inline-block;
    margin: 5px;
  }
  .hidden {
    display: none;
  }
  .nav-link{
    color: #b14280;
    text-decoration: none;
  }
  .nav-link:hover{
    text-decoration: underline;
    /* color: #1e9099; */
  }

  /* Animation */

  /*Vertical Sliding*/
.slidingVertical{
  display: inline;
  text-indent: 8px;
}
.slidingVertical span{
  animation: topToBottom 10s linear infinite 0s;
  -ms-animation: topToBottom 10s linear infinite 0s;
  -webkit-animation: topToBottom 10s linear infinite 0s;
  opacity: 0;
  overflow: hidden;
  position: absolute;
}
.slidingVertical span:nth-child(2){
  animation-delay: 2.5s;
  -ms-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
}
.slidingVertical span:nth-child(3){
  animation-delay: 5s;
  -ms-animation-delay: 5s;
  -webkit-animation-delay: 5s;
}
.slidingVertical span:nth-child(4){
  animation-delay: 7.5s;
  -ms-animation-delay: 7.5s;
  -webkit-animation-delay: 7.5s;
}
/* .slidingVertical span:nth-child(5){
  animation-delay: 10s;
  -ms-animation-delay: 10s;
  -webkit-animation-delay: 10s;
} */

/*topToBottom Animation*/
@-moz-keyframes topToBottom{
  0% { opacity: 0; }
  5% { opacity: 0; -moz-transform: translateY(-25px); }
  10% { opacity: 1; -moz-transform: translateY(0px); }
  25% { opacity: 1; -moz-transform: translateY(0px); }
  30% { opacity: 0; -moz-transform: translateY(25px); }
  80% { opacity: 0; }
  100% { opacity: 0; }
}
@-webkit-keyframes topToBottom{
  0% { opacity: 0; }
  5% { opacity: 0; -webkit-transform: translateY(-25px); }
  10% { opacity: 1; -webkit-transform: translateY(0px); }
  25% { opacity: 1; -webkit-transform: translateY(0px); }
  30% { opacity: 0; -webkit-transform: translateY(25px); }
  80% { opacity: 0; }
  100% { opacity: 0; }
}
@-ms-keyframes topToBottom{
  0% { opacity: 0; }
  5% { opacity: 0; -ms-transform: translateY(-25px); }
  10% { opacity: 1; -ms-transform: translateY(0px); }
  25% { opacity: 1; -ms-transform: translateY(0px); }
  30% { opacity: 0; -ms-transform: translateY(25px); }
  80% { opacity: 0; }
  100% { opacity: 0; }
}
</style>
