import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

// Charger les composants de manière asynchrone pour optimiser le chargement
const HomePage = defineAsyncComponent(() => import('@/views/HomePage.vue'));
const LoginPage = defineAsyncComponent(() => import('@/views/LoginPage.vue'));

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Page principale
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage, // Page de connexion
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
