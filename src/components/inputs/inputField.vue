<template>
    <div class="input-field">
      <label class="input-field__label">{{ label }}</label>
        <div class="input-field__wrapper">
            <span v-if="prependIcon" class="input-field__prepend-icon">{{ prependIcon }}</span>
            <input
              class="input-field__input"
              :type="type"
              :value="value"
              @input="$emit('input', $event.target.value)"
              :placeholder="placeholder"
              @keypress="onKeypress"
            />
        </div>
    </div>
  </template>
  
  <script>
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
      type: {
        type: String,
        default: 'text'
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
    methods: {
      onKeypress (event) {
        if (!('1234567890.'.includes(event.key))) {
          event.preventDefault()
        } 
      }
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
  