<template>
  <div id='communityCard' @click="openModal(communityData)">
    <div class="cardImageWrapper" v-if="communityData.image">
      <img :src="communityData.image" :alt="communityData.title" />
    </div>
    <div>
      <a><h3 class="projectTitle">{{communityData.title}}</h3></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'communityCard',
  props: {
    communityData: {
      type: Object,
      required: true,
    },
    openModal: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scoped>
  #communityCard {
    display: flex;
    flex-flow: column;
    text-align: center;
  }
  a {
    text-decoration-color: #b14280;
    text-decoration-style: double;
  }
  /* .cardImageWrapper {
    min-height: 200px;
    max-height: 200px;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
  } */
  img {
    margin: 0 auto 10px auto;
    align-self: center;
    width: auto;
    height: 100px;
  }
  .projectTitle {
    color: #1e9099;
  }
  ul {
    text-align: left;
    width:70%;
    margin: 0 auto;
  }
  .objective-list {
    margin-bottom: 20px;
  }
  .resource-list {
    list-style: none;
    margin: 10px auto 0 auto;
    text-align: center;
  }
  .resource-link {
    text-decoration: none;
    color: #71D6E4;
  }
</style>
