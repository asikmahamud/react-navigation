<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import Footer from './components/Footer.vue';
import SearchModal from './components/SearchModal.vue';
import MobileMenu from './components/MobileMenu.vue';
import { ref } from 'vue';
import { useStore } from './stores/main';


const store = useStore()

</script>

<template>
  <div :class="{'dark' : store.darkMode}">
    <header class="sticky top-0 z-40">

<div class="wrapper">
  <AppHeader/>
</div>
</header>

<main>
<SearchModal/>
<MobileMenu/>
</main>


<RouterView />
<Footer />
  </div>
</template>
