<template>
  <div id='teaching'>
    <gridNav></gridNav>
    <div class="description-wrapper">
      <!-- <p>
        Quality education is one of the most valuable things we can invest in as a society. For the past five years I've developed an intrest in improving education through technology. My time teaching has informed that intrest and given it more direction by allowing me to experience the trials and joys of facilitating learning.
      </p> -->
    </div>
    <div class="card-list-wrapper">
      <div v-for="item in teaching">
        <communityCard :communityData="item"></communityCard>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import gridNav from './gridNav';
import communityCard from './communityCard';
import teaching from '../lib/teaching';
import footerBar from './footerBar';

export default {
  name: 'teaching',
  components: {
    gridNav,
    communityCard,
    footerBar,
  },
  data() {
    return {
      teaching,
    };
  },
};
</script>
<style scoped>
.card-list-wrapper {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  margin: 20px 50px 0 50px;
}
.description-wrapper {
  margin: 20px auto 20px auto;
  width: 70vw;
}
iframe {
  width: 100%;
}
</style>
