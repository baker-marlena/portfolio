<template>
  <div id='teaching'>
    <gridNav></gridNav>
    <div class="description-wrapper">
      <p>
        Teaching thoughts
      </p>
    </div>
    <div class="card-list-wrapper">
      <div v-for="item in teaching">
        <communityCard :communityData="item"></communityCard>
      </div>
    </div>
  </div>
</template>
<script>
import gridNav from './gridNav';
import communityCard from './communityCard';
import teaching from '../lib/teaching';

export default {
  name: 'teaching',
  components: {
    gridNav,
    communityCard,
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
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin: 20px 50px 0 50px;
}
iframe {
  width: 100%;
}
</style>
