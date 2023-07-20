<script setup>
const props = defineProps(['name', 'center'])
</script>
<template>
  <button :type="props.name">{{ props.center }}</button>
</template>
