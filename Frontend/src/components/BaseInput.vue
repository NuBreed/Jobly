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
  <section class="wrapper">
    <label>{{ title }}</label>
    <input
      class="basic-input"
      v-bind="$attrs"
      :placeholder="title"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </section>
  <slot> </slot>
  <!-- <input
    class="slider__input"
    $attr
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  /> -->
</template>
<style scoped>
.wrapper {
  width: 100%;
  text-align: center;
}
label {
  color: rgb(16, 16, 27);
  font-size: 20px;
  margin: 16px 0;
  text-align: right;
}
input {
  width: 100%;
  margin: 12px 0;
  padding: 12px;
  border: 0.2px solid rgb(16, 16, 27);
  outline: none;
  border-radius: 12px;
}
</style>
