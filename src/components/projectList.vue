<template>
  <div id="projectList">
    <div class="push-center">
      <input placeholder="Search Technologies" v-model="search"/>
      <div class="project-list-wrapper">
        <div v-for="project in displayProjects" :key="project.key" class="project-card">
          <projectCard :projectData="project"  :openModal="openModal"></projectCard>
        </div>
      </div>
    </div>
    <itemModal v-if="modalShow" :cardData="cardData" :closeModal="closeModal"></itemModal>
  </div>
</template>

<script>
import gridNav from './gridNav';
import project from './project';
import projectCard from './projectCard';
import projects from '../lib/projects';
import footerBar from './footerBar';
import itemModal from './itemModal';

export default {
  name: 'projectList',
  components: {
    gridNav, project, projectCard, footerBar, itemModal,
  },
  data() {
    return {
      projects,
      search: '',
      modalShow: false,
      cardData: {},
    };
  },
  computed: {
    /*eslint-disable*/
    displayProjects() {
        if (this.search) {
        let projectFilter = this.projects.filter(projectData => {
          let techFilter = projectData.tech.filter(tech => {
            return tech.toLowerCase().match(this.search.toLowerCase())
          })
          return techFilter.length > 0
        })
        return projectFilter;
      }
      else {
        return this.projects;
      }
    },
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

  .push-center {
    text-align: center;
  }
  .project-list-wrapper {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 50px;
  }
</style>
