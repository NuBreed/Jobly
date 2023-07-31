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
  <section class="section">
    <form @submit.prevent="handleSubmit" novalidate class="form-wrapper">
      <Input
        v-model="jobSearchString"
        title="looking for a job,start searching...."
        type="text"
      />
    </form>
    <h1>{{ jobSearchString }}</h1>
  </section>
</template>
<style scoped>
.section {
  padding: 8px;
  margin: 16px 0;
}
</style>
