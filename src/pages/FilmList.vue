<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import type { Film } from '../types/Film';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const films = ref<Film[]>([]);

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
            <div class="cards">

            </div>

            <div class="cards-selection">
                <div class="cards">

                </div>

                <div class="pagination">
                    <button type="button" class="page-button">
                        <ChevronLeft class="page-icon" />
                    </button>

                    <div class="page-numbers">
                        <button>1</button>
                    </div>

                    <button type="button" class="page-button">
                        <ChevronRight class="page-icon" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>