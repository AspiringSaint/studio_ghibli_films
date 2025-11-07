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

</style>
