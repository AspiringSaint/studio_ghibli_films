import { createRouter, createWebHistory } from "vue-router";
import FilmDetail from "../pages/FilmDetail.vue";
import FilmList from "../pages/FilmList.vue";

const routes = [
    { path: '/', name: 'Home', component: FilmList },
    { path: '/film/:id', name: 'FilmDetail', component: FilmDetail, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;