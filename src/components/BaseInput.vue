<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <label>{{ title }}</label>
  <input
    class="basic-input"
    v-bind="$attrs"
    :placeholder="title"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <slot> </slot>
  <!-- <input
    class="slider__input"
    $attr
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  /> -->
</template>
<style scoped>
label {
  color: rgb(16, 16, 27);
  font-size: 2rem;
  margin-bottom: 1rem;
}
input {
  width: 50vw;
  padding: 1rem;
  border: 2px solid rgb(16, 16, 27);
  border-radius: 8px;
}
</style>
