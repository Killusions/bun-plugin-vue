<script lang="ts" setup>
import Counter from './components/Counter.vue';
import { ref } from 'vue';

const message = ref('Hello, Vue 3 with TypeScript!');
const count = ref(0);
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <Counter :count @increment="() => count++" @decrement="() => count--"/>
  </div>
</template>
