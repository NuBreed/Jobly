<script setup>
import Sidebar_links from './Sidebar_links.vue'
import { useSidebarStore } from '../stores/headerStore'

const aside_links = ['Profile', 'food', 'jsafbf', 'KLFNDLSAF']
const open_sidebar = useSidebarStore()
</script>
<template>
  <main class="aside">
    <div class="aside-content">
      <section class="aside-header" @click="open_sidebar.toggle">
        <font-awesome-icon :icon="['fas', 'xmark']" class="fas" />
      </section>
      <section class="aside-center" v-for="aside_link in aside_links">
        <Sidebar_links :job="aside_link" class="links" />
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
  width: 70%;
  height: 100%;
  color: #ffffff;
  padding: 24px 12px;
  display: none;
}

.aside-content {
  width: 100%;
  height: 100%;
}
.aside-header {
  text-align: end;
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
@media screen and (max-width: 678px) {
  .aside {
    display: block;
  }
}
</style>
