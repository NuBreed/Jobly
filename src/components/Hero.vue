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
    <div>
      <h1 class="hero-title">Joblx</h1>
      <p class="hero-text">for your next job</p>
    </div>
    <!-- <form @submit.prevent="handleSubmit" novalidate class="form-wrapper">
      <Input v-model="jobSearchString" title="Your new job" type="text" />
    </form>
    <h1>{{ jobSearchString }}</h1> -->
  </main>
</template>
<style scoped>
.main {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-repeat: no-repeat;

  background-size: cover;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  gap: 0.25rem;
  color: #fff;
}
.hero-title {
  font-size: 80px;
}
.hero-text {
  font-size: 42px;
  font-style: italic;
}
.form-wrapper {
  display: grid;
}
</style>
