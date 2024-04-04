<template>
  <!-- <Header /> -->
  <div class="container mx-auto">
    <router-view></router-view>
  </div>
  
  </template>
  
  <script>
  import Header from './components/header.vue'
  export default {
      name: 'App',
      components: {
          Header,
      }
  }
  </script>