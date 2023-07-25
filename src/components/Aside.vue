<script setup>
import { useSidebarStore } from '../stores/headerStore'
const open_sidebar = useSidebarStore()

import Sidebar_links from './Sidebar_links.vue'
</script>
<template>
  <main class="aside">
    <div class="aside-content">
      <div class="aside-header" @click="open_sidebar.toggle">
        <font-awesome-icon :icon="['fas', 'xmark']" class="fas" />
      </div>
      <section class="aside-center">
        <Sidebar_links job="peter ajayi" class="links" />
        <Sidebar_links job="peter ajayi" />
        <Sidebar_links job="peter ajayi" />
        <Sidebar_links job="peter ajayi" />
        <Sidebar_links job="peter ajayi" />
        <Sidebar_links job="peter ajayi" />
        <Sidebar_links job="peter ajayi" />
      </section>
    </div>
  </main>
</template>
<style scoped>
.aside {
  position: absolute;
  top: 0;
  right: 0;
  background: #10101b;
  opacity: 0.8;
  width: 90%;
  height: 100%;
  color: #ffffff;
  padding: 24px 12px;
}

.aside-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 24px;
  width: 100%;
  height: 100%;
}
.aside-header {
  position: absolute;
  right: 12px;
  top: 8px;
  margin-bottom: 24px;
}
.fas {
  font-size: 42px;
}
.fas:hover {
  color: red;
}
.links {
  border-radius: 4px;
}
.links:hover {
  margin-bottom: 12px;
  box-shadow: 0px 1px 2px #ffffff;
}
</style>
