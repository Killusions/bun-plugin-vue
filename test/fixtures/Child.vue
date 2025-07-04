<script lang="ts" setup>
defineProps<{
  message: string;
}>();

defineEmits<{
  (e: 'update-message', value: string): void;
}>();
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="$emit('update-message', 'Hello from Child!')">
      Update Message
    </button>
  </div>
</template>
