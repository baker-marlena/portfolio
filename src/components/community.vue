<template>
  <div id='community'>
    <gridNav></gridNav>
    <div class="description-wrapper">
      <p>
        One of my favorite parts of being a developer is the community. Since day one of starting my journy to this career I have had so many helpful, friendly people to turn to. Then, I started to want to be one of those people. I have enjoyed a wide variety of community events over the last nine months. Here are some that I took a more active roll in or got something particularly valuable out of.
      </p>
    </div>
    <div class="card-list-wrapper">
      <div v-for="item in communityList" :key="communityList.title">
        <communityCard :communityData="item"></communityCard>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import communityList from '../lib/community';
import gridNav from './gridNav';
import communityCard from './communityCard';
import footerBar from './footerBar';

export default {
  name: 'community',
  components: {
    gridNav,
    communityCard,
    footerBar,
  },
  data() {
    return {
      communityList,
    };
  },
};
</script>
<style scoped>
  .description-wrapper {
    margin: 20px auto 20px auto;
    width: 70vw;
  }
  .card-list-wrapper {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    margin: 20px 50px 0 50px;
  }
</style>
