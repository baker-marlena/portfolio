<template>
  <div id="projectList">
    <gridNav></gridNav>
    <div class="push-center">
      <!-- <input placeholder="Search Technologies" v-model="search"/> -->
      <div class="project-list-wrapper">
        <div v-for="project in displayProjects" :key="project.key" class="project-card">
          <projectCard :projectData="project" ></projectCard>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import gridNav from './gridNav';
import project from './project';
import projectCard from './projectCard';
import projects from '../lib/projects';
import footerBar from './footerBar';

export default {
  name: 'projectList',
  components: {
    gridNav, project, projectCard, footerBar,
  },
  data() {
    return {
      projects,
      search: '',
    };
  },
  computed: {
    /*eslint-disable*/
    displayProjects() {
      if (this.search) {
        return this.projects.filter(projectData =>
          projectData.tech.includes(this.search),
        ) }
      else {
        return this.projects;
      }
    },
  },
};
</script>

<style scoped>
  .project-list-wrapper {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    margin: 20px 50px 0 50px;
  }
</style>
