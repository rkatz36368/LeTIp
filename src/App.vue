<template>
  <div id="app">
    <errorModal :errorMessage="errorMessage" :is-visible="showErrorModal" @close="closeModal"></errorModal>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import { EventBus } from './eventbus';
import errorModal from './components/common/errorModal.vue';

export default {
  components: {
    errorModal
  },
  data() {
    return {
      errorMessage: '',
      showErrorModal: false,
    };
  },
  methods:{
    showModal(message) {
      this.errorMessage = message;
      this.showErrorModal = true;
    },
    closeModal() {
      this.showErrorModal = false;
      this.errorMessage = '';
    },
  },
  mounted() {
    EventBus.$on('api-error', (message) => {
      this.showModal(message);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>