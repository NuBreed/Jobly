<script setup>
import Sidebar_links from './Sidebar_links.vue'
</script>
<template>
  <main class="aside">
    <div class="aside-content">
      <div class="aside-header">
        <font-awesome-icon :icon="['fas', 'xmark']" class="fas" />
      </div>
      <section class="aside-center">
        <Sidebar_links job="peter ajayi" />
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
  gap: 24px;
}
.aside-header {
  position: absolute;
  right: 12px;
  top: 12px;
  margin-bottom: 240px;
}
.fas {
  font-size: 42px;
}
.aside-center {
  background-color: red;
}
</style>
