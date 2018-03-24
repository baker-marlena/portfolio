<template>
  <div id="projectCard" @click="openModal(projectData)">
      <img :src="projectData.image" :alt="projectData.title" />
      <a><h3 class="projectTitle">{{projectData.title}}</h3></a>
      <small>{{projectData.tech}}</small>
    </div>
</div>

</template>
<script>
import project from './project';

export default {
  name: 'projectCard',
  components: {
    project,
  },
  props: {
    projectData: {
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
#projectCard {
  display: flex;
  flex-flow: column;
  text-align: center;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3); */
}
a {
  text-decoration-color: #b14280;
  text-decoration-style: double;
}
.cardImageWrapper {
  min-height: 200px;
  max-height: 200px;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
}
img {
  margin: 0 auto 10px auto;
  align-self: center;
  width: auto;
  height: 100px;
}
a {
  text-decoration-color: #b14280;
  text-decoration-style: double;
}
.projectTitle {
  color: #1e9099;
}
</style>
