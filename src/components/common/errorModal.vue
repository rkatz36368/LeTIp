<template>
    <div v-if="isVisible" class="error-modal">
      <div class="error-modal__content">
          <span class="error-modal__close-button" @click="closeModal">&times;</span>
        <h2>Error</h2>
        <p>{{ errorMessage }}</p>
  
        <div class="error-modal__progress-bar">
          <div class="error-modal__progress" :style="{ width: progressWidth + '%' }"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      errorMessage: {
        type: String,
        required: true,
      },
      autoCloseTime: {
        type: Number,
        default: 5000, 
      },
      isVisible: {
      type: Boolean,
      required: true,
    },
    },
    data() {
      return {
        localVisible: false,
        progressWidth: 100, 
      };
    },
    watch: {
      isVisible(newVal) {
        if (newVal) {
          this.startTimer();
        } else {
          this.resetProgress();
        }
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      startTimer() {
        const intervalTime = 50;
        const step = (intervalTime / this.autoCloseTime) * 100;
        let elapsed = 0;
  
        this.progressWidth = 100;
  
        this.timerInterval = setInterval(() => {
          elapsed += intervalTime;
          this.progressWidth -= step;
  
          if (elapsed >= this.autoCloseTime) {
            clearInterval(this.timerInterval);
            this.closeModal(); 
          }
        }, intervalTime);
      },
      resetProgress() {
        this.progressWidth = 100; 
        clearInterval(this.timerInterval); 
      },
    },
    destroyed() {
      clearInterval(this.timerInterval); 
    },
  };
  </script>
  
  <style scoped>
  .error-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .error-modal__content {
    background-color: #fefefe;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    position: relative;
  }
  
  .error-modal__close-button {
    float: right;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .error-modal__progress-bar {
    width: 100%;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 15px;
  }
  
  .error-modal__progress {
    height: 100%;
    background-color: #bd04f7;
    transition: width 0.05s linear;
  }
  </style>
  