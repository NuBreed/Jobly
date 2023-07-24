<script setup>
import { reactive } from 'vue'
import NavButton from './NavButton.vue'
const navInfo = reactive([
  { component: 'Home', link: '/' },
  { component: 'Profile', link: '/profile' },
])
const logged = () => {
  console.log('msafbsajb')
}
</script>
<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-left">
        <router-link to="/" class="link">Joblx</router-link>
        <NavButton
          v-for="info in navInfo"
          :navTitle="info.component"
          :link="info.link"
          class="links-left none"
        />
      </div>
      <div class="navbar-left">
        <ul class="navbtns">
          <router-link class="link none" to="/">
            <span class="before">1</span>
            <font-awesome-icon :icon="['fas', 'message']" class="fas" />
          </router-link>
          <router-link class="link none" to="/">
            <span class="before">10</span>
            <font-awesome-icon :icon="['fas', 'bell']" class="fas" />
          </router-link>
          <router-link class="link none" to="/">
            <font-awesome-icon :icon="['fas', 'user']" class="fas" />
          </router-link>
        </ul>
        <ul class="nav-languages none">
          <li class="link">Eng</li>
          <li class="link">De</li>
        </ul>
        <div class="none">
          <p>Arbeitgeber/Jobschaltung</p>
        </div>
        <button class="block">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            @click="logged"
            class="fas"
          />
        </button>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.header {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: aliceblue;
  background: rgb(16, 16, 27);
  width: 100%;
  padding: 16px 0;
}
.navbar {
  width: 90%;
  margin: 0 auto;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}
.navbar-left {
  display: flex;
  justify-content: space-evenly;
}
.nav-languages {
  display: flex;
}
.nav-languages li {
  margin-left: 12px;
}
.navbtns {
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
}
.link {
  list-style: none;
  color: #ffffff;
  position: relative;
}
.fas {
  font-size: 24px;
}
.before {
  position: absolute;
  background: rgb(155, 49, 49);
  top: -15px;
  right: -4px;
  border-radius: 50%;
  padding: 4px;
}
.block {
  display: none;
  background: none;
  padding: 12px;
  color: #fff;
  border: none;
}

@media screen and (max-width: 640px) {
  .navbar {
    width: 100%;
  }
  .none {
    display: none;
  }
  .block {
    display: block;
  }
}
</style>
