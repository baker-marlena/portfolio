<template>
  <div id='itemModal'>
    <div class="close-wrapper"><span @click="closeModal" ><i class="far fa-times"></i></span></div>
    <div class="cardImageWrapper" v-if="!$route.name === 'teaching'">
      <img :src="cardData.image" :alt="cardData.title" />
    </div>
    <div>
      <a v-if="cardData.url" :href="cardData.url" target="_blank"><h3 class="projectTitle">{{cardData.title}}</h3></a>
      <h3 v-if="!cardData.url" class="projectTitle">{{cardData.title}}</h3>
      <p>
      {{cardData.description}}
      </p>
      <h5 v-if='cardData.objectives'>Learning Objectives</h5>
      <ul class="objective-list">
        <li v-for="objective in cardData.objectives" :key="objective">{{objective}}</li>
      </ul>
      <div class='video-wrapper' v-html="cardData.embed">
      </div>
      <div>
      <ul class="resource-list">
        <li v-for="resource in cardData.resources" :key="resource">
          <a class="resource-link" :src="resource.link">{{resource.name}}</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'itemModal',
  props: {
    cardData: {
      type: Object,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scoped>
#itemModal {
  border: 1px solid #1e9099;
  background-color: white;
  position: fixed;
  width: 50%;
  left: 25%;
  top: 10%;
  display: flex;
  flex-flow: column;
  border-top: 1px solid darkgrey;
  border-radius: 5px;
  border-bottom: 1px solid darkgrey;
  border-left:5px double #1e9099;
  border-right: 5px double #1e9099;
  padding: 15px;
}
.close-wrapper {
  text-align: right;
}
.cardImageWrapper {
  /* min-height: 200px; */
  max-height: 200px;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
}
img {
  /*max-height: 250px;
  min-height: 200px;*/
  margin: 0 auto 10px auto;
  align-self: center;
  max-width: 200px;
  height: auto;
}
.projectTitle {
  color: #1e9099;
  text-align: center;
}
ul {
  text-align: left;
  width:70%;
  margin: 0 auto;
}
a {
  text-decoration-color: #b14280;
  text-decoration-style: double;
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
  color: #b14280;
}
.video-wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
}
h5 {
  text-align: center;
}
</style>
