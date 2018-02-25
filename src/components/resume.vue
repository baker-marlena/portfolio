<template>
  <div id="resume">
    <gridNav></gridNav>
    <div>
      <h5><a class="link-color" href="../../static/Marlena_Baker_Resume.pdf" download="../../static/Marlena Baker Resume-site.pdf">Download Resume</a></h5>
    </div>
    <hr />
    <pdf class="bottom-space" src="../../static/Marlena_Baker_Resume.pdf"></pdf>
    <footerBar></footerBar>
  </div>
</template>
<script>
import pdf from 'vue-pdf';
import gridNav from './gridNav';
import footerBar from './footerBar';

export default {
  name: 'resume',
  components: {
    gridNav,
    pdf,
    footerBar,
  },
  data: () => ({
    resumeURL: '',
  }),
};
</script>
<style scoped>
.link-color {
  color: #1e9099;
}
.link-color:hover {
  text-decoration: underline;
}
hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
}
</style>
