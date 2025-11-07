<script setup lang="ts">
import type { Film } from '../types/Film';

const props = defineProps<{ film: Film }>();
</script>

<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="film.image" :alt="film.title">
    </div>

    <div class="details-wrapper">
      <div class="text-content">
        <h2>{{ film.title }}</h2>
        <span class="original_title">{{ film.original_title }}</span>
        <p>{{ film.description }}</p>
      </div>

      <div class="meta">
        <div class="meta-item">
          <span>{{ film.release_date }}</span>
        </div>

        <div class="meta-item">
          <span>{{ film.rt_score }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 480px;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  overflow: hidden;
  background: #2c2c2c;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
