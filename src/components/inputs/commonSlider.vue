<template>
    <div class="common-slider">
      <span class="common-slider__tip-text">{{label}}: {{  localValue  }} {{ appendText }}</span>
      <input
        class="common-slider__input"
        type="range"
        :min="min"
        :max="max"
        v-model="localValue"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'commonSlider',
    props: {
      value: {
        type: Number,
        required: true
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      label: {
        type: String,
        default: 'value'
      },
      appendText: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
      };
    },
    computed: {
      localValue: {
        get(){
          return this.value
        },
        set(newValue){
          this.$emit('input', Number(newValue))
        }
      }
    },
  };
  </script>
  
  <style scoped>
  .common-slider {
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 300px; 
  }
  
  .common-slider__input {
    width: 100%;
  }

.common-slider__tip-text{
  margin-right: auto
}
  </style>
  