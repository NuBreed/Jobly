<script setup>
import { ref, reactive, watch, computed } from 'vue'
import Input from './BaseInput.vue'

const handleSubmit = () => {
  if (!jobSearchString.value) {
    console.log('sakfnsadgkidsgk')
  } else {
    console.log(jobSearchString.value)
  }
}
const jobSearchString = ref('')
</script>
<template>
  <main class="main">
    <h1>At Jobly, we have your back</h1>
    <form @submit.prevent="handleSubmit" novalidate class="form-wrapper">
      <Input v-model="jobSearchString" title="Your new job" type="text" />
    </form>
    <h1>{{ jobSearchString }}</h1>
  </main>
</template>
<style scoped>
.main {
  background-image: url('https://cdn.pixabay.com/photo/2020/08/16/03/30/remote-5491798_1280.png');
  background-position: center bottom;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  gap: 0.25rem;
}
.form-wrapper {
  display: grid;
}
</style>
