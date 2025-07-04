<script lang="ts" setup>
import { ref } from 'vue';
import Child from './Child.vue';
import ChildWithDefaultSlot from './ChildWithDefaultSlot.vue';
import ChildWithNamedSlot from './ChildWithNamedSlot.vue';

const message = ref("Hello from Parent!");
</script>

<template>
  <div>
    <Child :message @update-message="(msg) => (message = msg)" />
    <ChildWithDefaultSlot>
      <h1>Slot</h1>
    </ChildWithDefaultSlot>
    <ChildWithNamedSlot>
      <template #header>
        <h1>Header Slot</h1>
      </template>
    </ChildWithNamedSlot>
  </div>
</template>
