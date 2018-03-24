<template>
  <div id='teaching'>
    <div class="description-wrapper">
      <!-- <p>
        Quality education is one of the most valuable things we can invest in as a society. For the past five years I've developed an intrest in improving education through technology. My time teaching has informed that intrest and given it more direction by allowing me to experience the trials and joys of facilitating learning.
      </p> -->
    </div>
    <div class="card-list-wrapper">
      <div v-for="item in teaching">
        <communityCard :communityData="item" :openModal="openModal"></communityCard>
      </div>
    </div>
    <itemModal v-if="modalShow" :cardData="cardData" :closeModal="closeModal"></itemModal>
  </div>
</template>
<script>
import gridNav from './gridNav';
import communityCard from './communityCard';
import teaching from '../lib/teaching';
import footerBar from './footerBar';
import itemModal from './itemModal';

export default {
  name: 'teaching',
  components: {
    gridNav,
    communityCard,
    footerBar,
    itemModal,
  },
  data() {
    return {
      teaching,
      modalShow: false,
      cardData: {},
    };
  },
  methods: {
    openModal(cardData) {
      this.modalShow = true;
      this.cardData = cardData;
    },
    closeModal() {
      this.modalShow = false;
    },
  },
};
</script>
<style scoped>
#teaching {
  margin-top: 50px;
  margin-bottom: 50px;
}
.card-list-wrapper {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 20px 50px 0 50px;
}
.description-wrapper {
  margin: 20px auto 20px auto;
  width: 70vw;
}
</style>
