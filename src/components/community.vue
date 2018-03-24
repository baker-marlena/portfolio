<template>
  <div id='community'>
    <div class="description-wrapper">
      <!-- <p>
        One of my favorite parts of my job is the community. Since day one of my journy to this career I have had so many helpful, friendly people to turn to. Then, I started to want to be one of those people for new students. I have enjoyed a wide variety of community events as I went. These are some that I took a more active roll in or got something particularly valuable out of.
      </p> -->
    </div>
    <div class="card-list-wrapper">
      <div v-for="item in communityList" :key="communityList.title">
        <communityCard :communityData="item" :openModal="openModal"></communityCard>
      </div>
    </div>
    <itemModal v-if="modalShow" :cardData="cardData" :closeModal="closeModal"></itemModal>
  </div>
</template>
<script>
import communityList from '../lib/community';
import gridNav from './gridNav';
import communityCard from './communityCard';
import footerBar from './footerBar';
import itemModal from './itemModal';

export default {
  name: 'community',
  components: {
    gridNav,
    communityCard,
    footerBar,
    itemModal,
  },
  data() {
    return {
      communityList,
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
  #community {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .description-wrapper {
    margin: 20px auto 20px auto;
    width: 70vw;
  }
  .card-list-wrapper {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 20px 50px 0 50px;
  }
</style>
