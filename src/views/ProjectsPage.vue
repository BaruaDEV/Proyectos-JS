<template>
    <div class="projects">
        <h1 class="titulo">Mis Proyectos</h1>
        <ul>
            <li v-for="project in projects" :Key="project.id">
                <div class="textProject">
                    <h3>{{project.name}}</h3>
                    <p>{{project.description}}</p>
                    <p>Aquí que te dejo unas imagenes:</p>
                </div>
                <img :src="project.img" alt="Imagen del proyecto" class="img-sample">
                <img :src="project.img1" alt="Imagen del proyecto" class="img-sample">
                <p>Y aquí podrás encontrar el código completo:</p>

                <a href="https://www.linkedin.com/in/mauro-barua-b2b549273/" target="_blank">
                    <img src="@/assets/linkedin.png" alt="link a linkedin" class="img-link">
                </a>
                <a :href="project.link" target="_blank">
                    <img src="@/assets/logotipo-de-github.png" alt="link a github" class="img-link">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import b2Image from '@/assets/b2.png';
import b1Image from '@/assets/b1.png';

import rd1Image from '@/assets/dispositivos_1.png';
import rd2Image from '@/assets/dispositivos_2.png';

import ad1Image from '@/assets/adivina.png';
import ad2Image from '@/assets/adivina_1.png';

import pf1Image from '@/assets/portfolio_1.png';
import pf2Image from '@/assets/portfolio_2.png';

import gr1Image from '@/assets/Gestor_restaurante.png';
import gr2Image from '@/assets/Gestor_restaurante_2.png';

export default {
    name: 'projectsPage',
    data(){
        return {
            projects: [
                {
                    id: 1,
                    name: 'Gestión de Inventario',
                    description: 'Aplicación web para gestionar productos y pedidos desarrollado con React.js, Node.JS, Express y MySQL',
                    link: 'https://github.com/BaruaDEV/Proyectos-JS/tree/main/Gestion_de_Inventario',
                    img: b2Image,
                    img1: b1Image,
                },
                {
                    id: 2,
                    name: 'Regístro de Dispositivos',
                    description: 'desarrollo de una aplicación simple para registrar productos',
                    link: 'https://github.com/BaruaDEV/Proyectos-JS/tree/main/Registro_dispositivos',
                    img: rd1Image,
                    img1: rd2Image,
                },
                {
                    id: 3,
                    name: 'Portfolio Personal',
                    description: 'Mi sitio web personal donde muestro mis proyectos y habilidades como desarrollador web.',
                    link: 'https://github.com/BaruaDEV/Proyectos-JS/tree/main/portafolio-vue',
                    img: pf1Image,
                    img1: pf2Image,
                },
                {
                    id: 4,
                    name: 'Adivína el Número',
                    description: 'Mini juego donde deberas adivinar un número del 1 al 10, realizado con React.js.',
                    link: 'https://github.com/BaruaDEV/Proyectos-JS/tree/main/mi-app',
                    img: ad1Image,
                    img1: ad2Image,
                },
                {
                    id: 5,
                    name: 'Gestor de Restaurante',
                    description: 'Aplicacion para manejar pedidos y regístro de recibo de Restaurante, realizado con Python y TKinter',
                    link: 'https://github.com/BaruaDEV/Proyectos-Python',
                    img: gr1Image,
                    img1: gr2Image
                },
            ]
        }
    }
}
</script>

<style scoped>
.projects {
    background-image: url('@/assets/dev_1.jpg');
    background-position: center;
    background-attachment: fixed; /* Fija la imagen en su lugar */
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;   /* Asegura que cubra el 100% de la altura de la pantalla */
    width: 100vw;       /* Asegura que cubra el 100% del ancho de la pantalla */
    overflow-x: hidden; /* Evita cualquier scroll horizontal innecesario */
    text-align: center;
    padding: 20px;
    color:white;
}

.textProject {
    background-color: rgba(0, 0, 0, 0.7); /* Fondo negro con 50% de transparencia */
    color: white;                         /* Color del texto en blanco */
    padding: 15px;                        /* Espacio interno alrededor del texto */
    border-radius: 10px;                  /* Bordes redondeados */
    margin: 20px auto;                    /* Margen externo para separar de otros elementos */
    width: 80%;                           /* Ajusta el ancho al contenido */
}

.titulo {
    border-radius: 10px;
    padding: 5px;
    background-color: transparent;/* Fondo transparente */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);

    color: #3493bc;
    font-family: 'Arial', sans-serif;
    text-shadow:
        -2px -2px 7px #000,   /* Sombra hacia la esquina superior izquierda (negra) */
        2px -2px 0 transparent,    /* Sombra hacia la esquina superior derecha (negra) */
        -2px 2px 0 #000,    /* Sombra hacia la esquina inferior izquierda (negra) */
        2px 2px 0 transparent;     /* Sombra hacia la esquina inferior derecha (negra) */
    position: relative;
    display: inline-block;
    left: 1%;
    margin-left:px;
    margin: 20px auto;
}

.titulo::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #3065e9;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
    border-radius: 5px;
}

.titulo:hover::after {
    transform: scaleX(1); /* Anima el subrayado al pasar el mouse */
    transform-origin: bottom left;
}

.img-link {
    background-color: rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.5); /* Fondo negro con 50% de transparencia */
    width: 3vw;
    margin: 10px;
    height: auto;
    transition: box-shadow 0.4s ease;
    border-radius: 50%;
    object-fit: cover;
}

.img-link:hover {
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.9);
}

.img-sample {
    width: 45vw;
    padding: 20px;
}

.projects p {
    background-color: rgba(0, 0, 0, 0.7); /* Fondo negro con 50% de transparencia */
    color: white;                         /* Color del texto en blanco */
    padding: 15px;                        /* Espacio interno alrededor del texto */
    border-radius: 10px;                  /* Bordes redondeados */
    margin: 20px auto;                    /* Margen externo para separar de otros elementos */
    width: 80%;                           /* Ajusta el ancho al contenido */
}
</style>