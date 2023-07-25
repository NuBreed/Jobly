<script setup>
const props = defineProps({
  job: String,
})
</script>
<template>
  <div class="navlinks">
    <router-link to="/">
      <p class="link-info">{{ job }}</p>
      <font-awesome-icon :icon="['fas', 'chevron-right']" class="fas" />
    </router-link>
  </div>
</template>
<style scoped>
.navlinks {
  display: flex;
  justify-content: space-between;
  padding: 12px;
}
.link-info {
  font-size: 24px;
  text-transform: capitalize;
}
.fas {
  font-size: 24px;
}
</style>
