<script setup>
import { reactive } from 'vue'
import NavButton from './NavButton.vue'
const navInfo = reactive([
  { component: 'Home', link: '/' },
  { component: 'Profile', link: '/profile' },
])
</script>
<template>
  <header class="header-bg">
    <nav class="navbar">
      <router-link to="/" class="link">Jobly</router-link>
      <div class="navbtns">
        <NavButton
          v-for="info in navInfo"
          :navTitle="info.component"
          :link="info.link"
        />
      </div>
    </nav>
  </header>
</template>
<style scoped>
.header-bg {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: aliceblue;
  background: rgb(16, 16, 27);
  width: 100%;
}
.navbar {
  width: 90%;
  margin: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbtns {
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
}
</style>
