<template>
  <div id="app">
    <gridNav :openEmail="openModal"/>
    <router-view></router-view>
    <footerBar />
    <emailModal v-if="modalShow" :closeModal="closeModal"/>
  </div>
</template>

<script>
import gridNav from './components/gridNav';
import footerBar from './components/footerBar';
import emailModal from './components/emailModal';

export default {
  name: 'app',
  components: {
    gridNav,
    footerBar,
    emailModal,
  },
  data() {
    return {
      modalShow: false,
    };
  },
  methods: {
    openModal() {
      this.modalShow = true;
    },
    closeModal() {
      this.modalShow = false;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
