<script setup>
import Jobs from '../components/Jobs.vue'
import Hero from '../components/Hero.vue'
import JobSearch from '../components/JobSearch.vue'
</script>

<template>
  <section class="header">
    <Hero />
  </section>
  <section>
    <JobSearch />
  </section>
  <section>
    <Jobs />
  </section>
</template>
<style scoped>
.header {
  /* padding: 2rem 0; */
  text-align: center;
  height: 50vh;
}
</style>
