<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import type { Film } from '../types/Film';

import FilmCard from '../components/FilmCard.vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const films = ref<Film[]>([]);
const loading = ref(false);
const currentPage = ref(1);
const itemsPerPage = 4;

const totalPages = computed(() => {
    return Math.ceil(films.value.length / itemsPerPage);
})

const paginatedFilms = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return films.value.slice(start, start + itemsPerPage);
})

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

onMounted(async () => {
    const result = await axios.get('https://ghibliapi.vercel.app/films');
    films.value = result.data;
})
</script>

<template>
    <div class="film-list">
        <div class="title">
            <h1>Studio Ghibli Films</h1>
        </div>

        <div class="cards-wrapper">
            <div v-if="loading" class="cards">

            </div>

            <div v-else class="cards-section">
                <div class="cards">
                    <FilmCard v-for="film in paginatedFilms" :key="film.id" :film="film" />
                </div>

                <div class="pagination">
                    <button 
                        type="button" 
                        class="page-button"
                        @click="prevPage"
                        :disabled="currentPage === 1"
                    >
                        <ChevronLeft class="page-icon" />
                    </button>

                    <div class="page-numbers">
                        <button 
                            v-for="page in totalPages" 
                            :key="page"
                            :class="['page-number', { active: page === currentPage }]"
                            @click="currentPage = page"
                        >
                            {{ page }}
                        </button>
                    </div>

                    <button 
                        type="button" 
                        class="page-button"
                        @click="nextPage"
                        :disabled="currentPage === totalPages"
                    >
                        <ChevronRight class="page-icon" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.film-list {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1280px;
    margin: auto;
    padding: 2rem 1rem;
}

.title {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.6rem;
    color: #f5f5f5;
    margin-bottom: 4rem;
    margin-top: 2rem;
    margin-left: 15px;
}

.title h1 {
    font-size: 1.8rem;
    font-weight: 800;
}

.cards-wrapper {
    display: flex;
    justify-content: center;
    flex-grow: 1;
}

.cards-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
}

.page-button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: #41b883;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-weight: 600;
    cursor: pointer;
}

.page-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.page-button:hover:not(:disabled) {
    background: #41b883;
    transform: translateY(-1px);
}

.page-numbers {
    display: flex;
    gap: 0.4rem;
}

.page-number {
    width: 32px;
    height: 32px;
    outline: none;
    border: none;
    border-radius: 15%;
    background: #2c2c2c;
    color: #f5f5f5;
    font-weight: 500;
    cursor: pointer;
}

.page-number:hover {
    background: #41b883;
    color: white;
    transform: translateY(-1px);
}

.page-number.active {
    background: #41b883;
    color: white;
    font-weight: 700;
    border-color: #41b883;
}
</style>