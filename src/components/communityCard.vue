<template>
  <div id='communityCard'>
    <div class="cardImageWrapper" v-if="communityData.image">
      <img :src="communityData.image" :alt="communityData.title" />
    </div>
    <div>
      <a v-if="communityData.url" :href="communityData.url"><h3 class="projectTitle">{{communityData.title}}</h3></a>
      <h3 v-if="!communityData.url" class="projectTitle">{{communityData.title}}</h3>
      <p>
        {{communityData.description}}
      </p>
      <h5 v-if='communityData.objectives'>Learning Objectives</h5>
      <ul class="objective-list">
        <li v-for="objective in communityData.objectives" :key="objective">{{objective}}</li>
      </ul>
      <div v-html="communityData.embed">
      </div>
      <div>
        <ul class="resource-list">
          <li v-for="resource in communityData.resources" :key="resource">
            <a class="resource-link" :src="resource.link">{{resource.name}}</a>
          </li>
        </ul>
      </div>
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
  },
};
</script>
<style scoped>
  #communityCard {
    display: flex;
    flex-flow: column;
    border-top: 1px solid darkgrey;
    border-radius: 5px;
    border-bottom: 1px solid darkgrey;
    border-left:5px double #1e9099;
    border-right: 5px double #1e9099;
    padding:20px;
    height: 100%
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3); */
  }
  .cardImageWrapper {
    min-height: 200px;
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
    width: 50%;
    height: auto;
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
