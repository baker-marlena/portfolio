import Vue from 'vue';
import Router from 'vue-router';
import projectList from '../components/projectList';
import resume from '../components/resume';
import project from '../components/project';
import community from '../components/community';
import teaching from '../components/teaching';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: projectList,
    },
    {
      path: '/project/:projectName',
      name: 'project',
      component: project,
      props: true,
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume,
    },
    {
      path: '/community',
      name: 'community',
      component: community,
    },
    {
      path: '/teaching',
      name: 'teaching',
      component: teaching,
    },
  ],
});
