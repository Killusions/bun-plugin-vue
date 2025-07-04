<script lang="ts" setup>
defineProps<{
  count: number
}>();

defineEmits<{
  (e: 'increment'): void;
  (e: 'decrement'): void;
}>();
</script>

<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <button @click="$emit('increment')">Increment</button>
    <button @click="$emit('decrement')">Decrement</button>
  </div>
</template>
