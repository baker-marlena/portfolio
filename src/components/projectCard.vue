<template>
  <div id="projectCard">
    <div class="projectImageWrapper">
      <a :href="project.url" target="_blank"><img :src="project.logo_url" :alt="project.title" /></a>
      <!-- <a :href="project.github_url" target="_blank">Github</a> -->
    </div>

    <div class="projectDescirptionWrapper">
      <h3 class="projectTitle"><a :href="project.url" target="_blank">{{project.title}}</a></h3>
      <small>{{project.tech}}</small>
      <p>
      {{project.description}}
      </p>

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
  props: ['projectData'],
  data() {
    return {
      project:
      { title: this.projectData.name,
        description: this.projectData.description,
        image_url: this.projectData.img_url,
        logo_url: this.projectData.logo_url,
        url: this.projectData.url,
        tech: this.projectData.tech },
    };
  },
  // methods: {
  //   listTechnology(array) {
  //    return `<ul class="techList">${array.map(technology => {
  //      return '<li>a</li>';
  //    })}</ul>`;
  //   },
  // },
};
</script>
<style scoped>
#projectCard {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 15px;
  border-top: 1px solid darkgrey;
  border-radius: 5px;
  border-bottom: 1px solid darkgrey;
  border-left:5px double #71D6E4;
  border-right: 5px double #71D6E4;
  padding: 10px;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3); */
}
.projectImageWrapper {
  min-height: 200px;
  max-height: 200px;
}
.projectDescirptionWrapper {

}
img {
  max-height: 150px;
  min-height: 100px;
}
.projectTitle a {
  color: #71D6E4;
}
</style>
