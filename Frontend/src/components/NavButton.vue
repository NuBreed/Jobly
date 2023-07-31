<script setup>
defineProps({
  navTitle: {
    type: String,
  },
  link: String,
})
</script>
<template>
  <router-link :to="link" class="link">{{ navTitle }}</router-link>
</template>
<style scoped></style>
