<script setup>
import { ref } from 'vue'
const name = ref('Ayodeji')
const editProfile = ref(false)
const clicked = () => (editProfile.value = !editProfile.value)
</script>

<template>
  <div class="overlay" v-if="editProfile">
    <button @click="clicked">closed</button>
    <section class="centered">
      <form action="">
        <label for="">
          Name
          <input type="text" name="" id="" v-model="name" />
        </label>
        <label for="">
          Name
          <input type="text" name="" id="" />
        </label>
        <label for="">
          Name
          <input type="text" name="" id="" />
        </label>
      </form>
    </section>
  </div>
  <section class="section main">
    <div class="first-wrapper">
      <div class="">
        <button @click="clicked" class="edit-btn">Edit Profile</button>
      </div>
      <h2 class="title">Welcome, {{ name }}</h2>
      <div class="details">
        <h4 class="label">Fullname</h4>
        <span class="information">Jon Doe</span>
      </div>
      <div class="details">
        <h4 class="label">Address</h4>
        <span class="information">Jon Doe str 8 , 10000, Deutschland</span>
      </div>
      <div class="details">
        <h4 class="label">Position</h4>
        <span class="information">HR Manager</span>
      </div>
      <div>
        <input type="file" name="cv" accept="*.pdf" />
        <a href="../assets/boho-gbf74e75ff_1280.jpg" download>sfdsyfdsf</a>
      </div>
    </div>
  </section>
  <section class="section"></section>
</template>
<style scoped>
.section {
  width: 90%;
  padding: 1rem;
  margin: auto;
}
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);

  display: grid;
  place-items: center;
  z-index: 10;
}
.centered {
  border-radius: 8px;
  padding: 64px;
  background: #fff;
  height: 30rem;
  aspect-ratio: 2/1;
}

.first-wrapper {
  position: relative;
  height: fit-content;
  border: 2px solid red;
  padding: 2rem;
  margin: 2rem 0;
}
.edit-btn {
  position: absolute;
  right: 4px;
  top: 4px;
}
.title {
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bolder;
  font-size: 2.5rem;
}
.details {
  font-size: 2rem;
  padding: 16px;
  display: flex;
}
.label {
  flex-basis: 30%;
  justify-self: start;
}
.information {
  flex-basis: 70%;
  justify-self: end;
  text-transform: uppercase;
}
</style>
