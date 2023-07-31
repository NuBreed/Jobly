<script setup>
import { ref, reactive } from 'vue'
import JobCard from './JobCard.vue'
import { useJobStore } from '../stores/jobStore'
const jobs = useJobStore()
console.log(jobs.job)

// const job = reactive({
//   title: 'LagerLeiter',
//   location: 'Hannover, 30419',
//   details:
//     'Planung und Umsetzung von Web-Anwendungen und komplexer Entwicklungsaufgaben Qualitätssicherung und Deployment von Webapplikationen Weiterentwicklung firmeneigener Softwarelösungen und Stabilitätsoptimierungen Evaluierung neuer Technologien im Umfeld unserer Lösungen',
//   field: 'logistics',
// })
</script>
<template>
  <div class="job-wrapper">
    <h3>Suggested Jobs</h3>
    <JobCard :job="jobs.job" class="job-card" />
    <JobCard :job="jobs.job" class="job-card" />
  </div>
</template>
<style scoped>
.job-card {
  width: auto;
  margin-bottom: 12px;
}

@media screen and (min-width: 678px) {
  .job-wrapper {
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
}
</style>
