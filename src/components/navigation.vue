<template>
  <div id="navigation">
    <header class=" left-space clearfix vertical-padding">
          <h1 class="logo xlarge-push-left large-push-left">
          <router-link class="align-right resume-link" :to="{ name: 'home'}">Marlena Baker</router-link><br /><small>Web Developer <i class="fa fa-times" aria-hidden="true"></i> Project Manager</small>
        </h1>
      <nav class="ink-navigation xlarge-push-right large-push-right half-top-space">
          <ul class="menu horizontal">
            <li><a href="mailto:baker.marlena@gmail.com"><img class="social-icon" src="../../static/social/email.png" alt="email"></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/marlenabaker"><img class="social-icon" src="../../static/social/linkedin.png" alt="linkedin"></a></li>
            <li><a target="_blank" href="https://github.com/baker-marlena"><img class="social-icon" src="../../static/social/github.png" alt="github"></a></li>
            <li><a target="_blank" href="https://twitter.com/marlena_baker2"><img class="social-icon" src="../../static/social/twitter.png" alt="twitter"></a></li>
          </ul>
          <ul class="menu horizontal align-right">
            <li v-if="hideLink !== '/'">
              <router-link class="align-right" :to="{ name: 'home'}"><b class="align-right resume-link">Project List</b></router-link>
            </li>
            <li v-if="hideLink !== '/resume'"><router-link class="align-right resume-link" :to="{ name: 'resume'}"><b class="align-right resume-link">
              Resume
            </b></router-link></li>
            <li v-if="hideLink !== '/community'">
              <router-link class="align-right" :to="{ name: 'community'}"><b class="align-right resume-link">Community Involvement</b></router-link>
            </li>
            <li v-if="hideLink !== '/teaching'">
              <router-link class="align-right" :to="{ name: 'teaching'}"><b class="align-right resume-link">Education</b></router-link>
            </li>
          </ul>
        </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: 'navigation',
  data() {
    return {
      currentRoute: this.$route.path,
      hideLink: '',
    };
  },
  watch: {
    currentRoute(newValue) {
      console.log(newValue);
      this.hideLink = newValue;
    },
  },
};
</script>
<style scoped>
  .social-icon {
    height: 50px;
    width: auto;
  }
  h1 {
    color: #71D6E4;
  }
  small {
    color:black;
  }
  .resume-link {
    color: #71D6E4;
  }
  .hidden {
    display: none;
  }
</style>
