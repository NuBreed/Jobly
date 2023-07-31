<script setup>
import { ref, computed, reactive } from 'vue'
const fullname = ref('Ayodeji')
const shorthands = computed(() => {
  return fullname.value[0]
})
</script>

<template>
  <main class="profile-wrapper">
    <header class="profile-header">
      <h1>{{ fullname }}</h1>
      <span class="abb">{{ shorthands }}</span>
    </header>
    <section class="profile_sub_header">
      <div>
        <div>
          <span>
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </span>
          johndoe@gmail.com
        </div>
        <div>
          <span>
            <font-awesome-icon :icon="['fas', 'phone']" />
          </span>
          +491555555555
        </div>
        <div>
          <span>
            <font-awesome-icon :icon="['fas', 'location-dot']" />
          </span>
          Berlin, Germany
        </div>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="fas" />
      </div>
    </section>
  </main>
</template>
<style scoped>
.profile-wrapper {
  padding: 24px 12px;
}
.abb {
  padding: 20px;
  border-radius: 50%;
  color: #ffffff;
  background: rgb(16, 16, 27);
}
.profile-header {
  /* color: rgb(16, 16, 27); */
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
}
.profile_sub_header {
  background: rgb(16, 16, 27);
  opacity: 0.25;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 8px;
  border-radius: 12px;
}
</style>
