<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import './assets/customcss.css'
</script>

<template>
  <Navbar />
  <router-view />
  <Footer class="footer"></Footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
}
</style>
