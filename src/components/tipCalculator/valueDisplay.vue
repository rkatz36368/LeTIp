<template>
  <div class="display">
    <div class="display__word"> {{ title }}</div>
    <commonSpinner v-if="loadingValue"></commonSpinner>
    <div v-else class="display__value">{{ showValue }}</div>
  </div>
</template>
  
<script>
  import commonSpinner from '../common/commonSpinner.vue'
export default {
  name: 'valueDisplay',
  components: {
    commonSpinner
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      required: true
    },
    loadingValue: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String,
      default: ''
    }
  },
  computed: {
    showValue: function () {
      return `${this.prefix} ${Number(this.value).toFixed(2)}`
    }
  }
};
</script>
  
  <style scoped>
  .display {
    text-align: center; 
  }
  
  .display__word {
    font-size: 18px; 
    font-weight: bold; 
  }
  
  .display__value {
    font-size: 24px; 
    color: #333;
  }
  </style>
  