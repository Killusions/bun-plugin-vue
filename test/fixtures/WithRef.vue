<script lang="ts" setup>
import { ref } from 'vue';
const message = ref('Hello, WithRef!');
</script>

<template>
  <h1>{{ message }}</h1>
</template>
