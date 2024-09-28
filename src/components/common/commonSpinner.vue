<template>
    <div class="spinner"></div>
  </template>
  
  <script>
  export default {
    name: 'commonSpinner'
  };
  </script>
  
  <style scoped>
  .spinner {
    margin: 10px auto;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #333;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  