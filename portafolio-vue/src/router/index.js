import {createRouter, createWebHistory} from 'vue-router';

// importamos las vistas de las diferentes secciones

import HomePage from '@/views/HomePage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import AboutPage from '@views/AboutPage.vue'
import ContactPage from '@views/ContactPage.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage},
    { path: '/projects', name: 'Projects', component: ProjectsPage},
    { path: '/about', name: 'About', component: AboutPage},
    { path: '/contact', name: 'Contact', component: ContactPage}
];

// crear enrutador con la historia de la web

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
