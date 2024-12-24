import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';


// Créer l'application Vue
const app = createApp(App);

// Utiliser le router
app.use(router);

// Monter l'application
app.mount('#app');