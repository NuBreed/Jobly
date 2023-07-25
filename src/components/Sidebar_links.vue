<script setup>
const props = defineProps({
  job: String,
})
</script>
<template>
  <div class="navlinks">
    <p class="link-info">{{ job }}</p>
    <router-link to="/">
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
