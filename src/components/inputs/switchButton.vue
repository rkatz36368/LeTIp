<template>
  <div class="currency-toggle">
    <span>EUR</span>
    <label class="currency-toggle__switch">
      <input class="currency-toggle__input" type="checkbox" v-model="localValue">
      <span class="currency-toggle__slider"></span>
    </label>
    <span>USD</span>
  </div>
</template>
  
  <script>
  export default {
  props: {
    value: {
      type: Boolean,
      required: true,
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
        this.$emit('input', newValue)
      }
    }
  }
}

  </script>

  <style scoped>
  .currency-toggle {
    display: flex;
    align-items: center; 
    align-self: center;
    gap: 10px; 
  }
  
  .currency-toggle__switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .currency-toggle__input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .currency-toggle__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }
  
  .currency-toggle__slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
  
  .currency-toggle__input:checked + .currency-toggle__slider {
    background-color: #bd04f7;
  }
  
  .currency-toggle__input:checked + .currency-toggle__slider:before {
    transform: translateX(26px);
  }
  </style>