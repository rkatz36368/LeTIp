<template>
    <div class="input-field">
      <label class="input-field__label">{{ label }}</label>
        <div class="input-field__wrapper">
            <span v-if="prependIcon" class="input-field__prepend-icon">{{ prependIcon }}</span>
            <input
              class="input-field__input"
              :value="value"
              type="number"
              :placeholder="placeholder"
              @keypress="onKeypress"
              @input="onInputChange"
              />
        </div>
    </div>
  </template>
  
  <script>
  import { debounce } from 'lodash';

  export default {
    name: "InputField",
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: [String, Number, null],
        default: null
      },
      placeholder: {
        type: String,
        default: ''
      },
      prependIcon: {
        type: String,
        default: null
      }
    },
    data(){
      return {
        debouncedInput: null,
      }
    },
    methods: {
      emitInputValue(value) {
      this.$emit('input', value);
      },
      onKeypress (event) {
        const key = event.key;
        const value = event.target.value;
        const isControlKey = key === 'Backspace' || key === 'Delete' || key === 'ArrowLeft' || key === 'ArrowRight';
        if (!('1234567890.'.includes(key))) {
          event.preventDefault()
          return
        } 
        if (key === '.' && value.includes('.')) {
          event.preventDefault()
          return
        }
        const parts = value.split('.')
        if (parts.length === 2 && parts[1].length >= 2 && !isControlKey) {
          event.preventDefault();
          return;
        }
      },
      onInputChange(event) {
        this.debouncedInput(event.target.value);
      },
    },
    created() {
    this.debouncedInput = debounce(this.emitInputValue, 300);
    },
    beforeDestroy() {
      this.debouncedInput.cancel();
    }
  };
  </script>
  
  <style scoped>
  .input-field {
    display: flex;
    align-items: center; 
    align-self: center;
    margin-bottom: 20px;

  }
  
  .input-field__label {
    margin-right: 10px; 
    font-size: 20px;
  }
  
  .input-field__input {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .input-field__wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.input-field__prepend-icon {
  padding: 8px;
  font-size: 16px;
}
  </style>
  