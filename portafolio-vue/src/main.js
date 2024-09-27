import {createApp} from 'vue';
import App from './App.vue';
import router from './router';  // Importa el router

// crea la aplicacion y registra el router
createApp(App)
    .use(router)
    .mount('#app');