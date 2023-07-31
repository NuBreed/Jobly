<script setup>
const props = defineProps({
  job: {
    id: Number,
    title: String,
    location: String,
    details: String,
    field: String,
  },
})
</script>
<template>
  <div class="card">
    <header class="header">
      <div>
        <h4 class="job-title">{{ job.title }}</h4>
        <span></span>
      </div>
      <div>
        <h6 class="job-location">{{ job.location }}</h6>
        <slot>
          <span class="company-rating"></span>
        </slot>
      </div>
      <div></div>
    </header>
    <main>
      <span></span>
      <p class="job-details"></p>
      <p class="job-details">{{ job.details }}</p>
    </main>
    <footer class="job-footer">
      <span> vor {{ job.published }} geschaltet</span>
      <slot>
        <span class="job-type"> {{ job.field }}</span>
        <div class="job-hours"></div>
      </slot>
    </footer>
  </div>
</template>
<style scoped>
.header,
footer {
  width: 100%;
}

.job-title {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  padding: 8px;
}
.job-location {
  text-align: end;
  font-size: 16px;
  padding: 8px;
}

.job-footer {
  text-align: end;
  font-size: 16px;
  padding: 8px;
}
.card {
  padding: 12px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  background-color: rgb(255, 255, 255);
  margin: 12px;
  border: 2px solid rgb(230, 235, 230);
  border-radius: 12px;
  transition: 200ms;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}
.card:hover {
  cursor: pointer;
  box-shadow: 4px 2px 32px rgb(61, 56, 24);
}
.job-details {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
}
</style>
