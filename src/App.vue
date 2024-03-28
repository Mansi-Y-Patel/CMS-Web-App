<template>
  <!-- <Header /> -->
  <div class="container mx-auto">
    <router-view></router-view>
  </div>
  
  </template>
  
  <script>
  import Header from './components/header.vue'
  export default {
    //names starting with capital letter
      name: 'App',
      components: {
          Header,
      }
  }
  </script>
  
  <style>

  </style>