<!-- src/components/MetaItem.vue -->
<template>
  <div class="meta-item">
    <div class="meta-label">
      <component v-if="icon" :is="icon" class="icon" />
      <span>{{ label }}</span>
    </div>
    <span class="meta-value" :class="scoreColor">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
import type { FunctionalComponent } from "vue";

defineProps<{
  label: string;
  value: string | number;
  scoreColor?: string;
  icon?: FunctionalComponent; // e.g., from lucide-vue-next
}>();
</script>

<style scoped>
.meta-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3a3a3a;
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #f5f5f5;
}

.meta-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  width: 16px;
  height: 16px;
  color: #41b883;
}
</style>
