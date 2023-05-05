<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header class="sticky top-0 z-40">

    <div class="wrapper">
      <AppHeader/>
    </div>
  </header>

 
  <RouterView />
  <Footer />
</template>
