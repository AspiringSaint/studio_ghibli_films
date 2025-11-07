<script setup lang="ts">
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Film } from '../types/Film';
import MetaItem from '../components/MetaItem.vue';
import {
    Calendar,
    ChevronLeft,
    Clock,
    Film as FilmIcon,
    Star,
    User
} from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();

const film = ref<Film | null>(null);

onMounted(async () => {
	const id = route.params.id as string;
	const result = await axios.get(`https://ghibliapi.vercel.app/films/${id}`);

	film.value = result.data;

});

const scoreColor = computed(() => {
	if (!film.value) return "";
	const score = Number(film.value.rt_score);
	if (score >= 85) return "score-green";
	if (score >= 70) return "score-orange";
	return "score-red";
});

function goBack() {
	router.push("/");
}
</script>

<template>
    <div class="film-detail-container">
        <div v-if="film" class="detail-container">
            <div class="image-wrapper">
                <img :src="film.movie_banner" :alt="film.title">
            </div>

            <div class="details-wrapper">
                <button class="back-button" @click="goBack">
                    <ChevronLeft class="icon" />
                    <span class="back-text">Back</span>
                </button>

                <div class="title-description">
                    <h1>{{ film.title }}</h1>
                    <span>{{ film.original_title }} - {{ film.original_title_romanised }}</span>
                    <p>{{ film.description }}</p>
                </div>

                 <div class="meta-items">
                    <MetaItem label="Director" :icon="FilmIcon" :value="film.director" />
                    <MetaItem label="Producer" :icon="User" :value="film.producer" />
                    <MetaItem label="Release" :icon="Calendar" :value="film.release_date" />
                    <MetaItem label="Runtime" :icon="Clock" :value="film.running_time + ' minutes'" />
                    <MetaItem label="Rating" :icon="Star" :value="film.rt_score + '%'" :scoreColor="scoreColor"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.film-detail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #242424;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.detail-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  background-color: #2c2c2c;
  border-radius: 12px;
  padding: 1.5rem;
  color: #f5f5f5;
}

@media (min-width: 768px) {
  .detail-container {
    flex-direction: row;
  }
}

.image-wrapper {
  flex: 1;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details-wrapper {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Back Button */
.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.6rem;
  border: none;
  background-color: #41b883;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  align-self: flex-end; /* desktop: top-left */
  order: 0; /* desktop: first */
}

.back-button:hover {
  background-color: #369f6f;
}

/* Chevron icon only on desktop */
.back-text {
  display: none;
}

@media (max-width: 767px) {
  /* push button to bottom on mobile */
  .back-button {
    order: 3; /* comes last */
    align-self: stretch;
    justify-content: center;
  }

  .back-text {
    display: inline; /* show text on mobile */
  }
}

/* Title & Description */
.title-description h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #f5f5f5;
  margin-bottom: 0.3rem;
}

.title-description span {
  font-size: 0.9rem;
  color: #aaa;
  display: block;
  margin-bottom: 1rem;
}

.title-description p {
  font-size: 1rem;
  line-height: 1.5;
  color: #cccccc;
  font-style: italic;
}

/* Meta items stacked like card meta */
.meta-items {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
</style>