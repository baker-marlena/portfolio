<template>
  <div id="resume">
    <gridNav></gridNav>
    <div>
      <h5><a class="link-color" href="../../static/Marlena Baker Resume-site.pdf" download="../../static/Marlena Baker Resume-site.pdf">Download Resume</a></h5>
    </div>
    <hr />
    <pdf class="bottom-space" src="../../static/Marlena Baker Resume-site.pdf"></pdf>
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
  color: #71D6E4;
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
