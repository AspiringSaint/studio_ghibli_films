<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import type { Film } from '../types/Film';
import { Calendar, Star } from 'lucide-vue-next'

const props = defineProps<{ film: Film }>();
const router = useRouter();

const scoreColor = computed(() => {
  const score = Number(props.film.rt_score);

  if (score >= 85) return 'score-green';   
  if (score >= 70) return 'score-orange';  
  return 'score-red';                      
});

function goToDetail() {
  router.push(`/film/${props.film.id}`)
}
</script>

<template>
  <div class="card" @click="goToDetail">
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
          <Calendar class="icon" />
          <span>{{ film.release_date }}</span>
        </div>

        <div class="meta-item">
          <Star class="icon star" />
          <span class="score" :class="scoreColor">{{ film.rt_score }}</span>
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
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); 
  cursor: pointer;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 55%;
  overflow: hidden;
  flex-shrink: 0;
}

.image-wrapper img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.details-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 45%;
}

.text-content h2 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #f5f5f5;
}

.original_title {
  display: block;
  font-size: 0.7rem;
  color: #aaaaaa;
  margin-bottom: 0.9rem;
  margin-top: 3px;
}

.text-content p {
  font-size: 0.85rem;
  color: #aaaaaa;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 1.1rem;
}

.meta {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-top: 0.8rem;
  font-size: 0.85rem;
  color: #aaaaaa;
}

.meta-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: #444444;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font-size: 0.7rem;
}

.icon {
  width: 16px;
  height: 16px;
  color: #f5f5f5;
}

.star {
  color: #f5b301;
}

.score {
  font-weight: 600;
}
</style>
