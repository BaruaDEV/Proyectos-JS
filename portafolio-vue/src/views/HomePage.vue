<template>
    <div class='home'>
        <h1 class="titulo">¡Hola, soy Mauro Barua!</h1>
        <img src="@/assets/me_7.png" alt="foto de perfil" class="profile-img">
        <p>Desarrollador web especializado en Javascript, React.js y Vue.js, además, con conocimiento en otras tecnologías.
         Siempre estoy trabajando y buscando modos de llevar adelante un proyecto y como modificar o mejorar lo proyectos
         ya elaborados.
         <br><br>
         Quieres conocer mas acerca de mis trabajos? o sobre mí? Te invito a que navegues por aqui y me conozcas tanto a mi,
         de manera mas personal, como a mi formación y proyectos. Todo, ¡en mi portfolio personal!</p>
        <router-link to="/projects" class="position-link">Ver mis proyectos</router-link>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
};
</script>

<style scoped>

.home {
    position: relative;
    padding: 0px;
    margin: 0px;
    background-image: url('@/assets/dev_2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;   /* Asegura que cubra el 100% de la altura de la pantalla */
    width: 100vw;       /* Asegura que cubra el 100% del ancho de la pantalla */
    overflow-x: hidden; /* Evita cualquier scroll horizontal innecesario */
    text-align: center; 
    color:white;

    display: inline-block;
    flex-direction: column;
}

.home p {
    background-color: rgba(0, 0, 0, 0.5); /* Fondo negro con 50% de transparencia */
    color: white;                         /* Color del texto en blanco */
    padding: 15px;                        /* Espacio interno alrededor del texto */
    border-radius: 10px;                  /* Bordes redondeados */
    margin: 20px auto;                    /* Margen externo para separar de otros elementos */
    width: 80%;                           /* Ajusta el ancho al contenido */
    max-width: 30%;
    left: -40px;
    top: -25px;
    text-align: left;
    line-height: 1.5em;
    font-size: 1.3rem               
}

.profile-img {
    position: absolute;
    float: right;
    margin: 0 auto;
    width: 30vw;
    height: auto;
    bottom: 40%;
    right: 30px;
    max-width: 100%;
    display: inline-block;
    border-radius: 20px;          /* Bordes redondeados */
    background-color: transparent;/* Fondo transparente */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9); /* Sombra suave opcional */
}

.position-link {
    position: relative;
    top: -170px;    /* Mueve el enlace 100px desde la parte superior */
    left: 32%;   /* Mueve el enlace 200px desde la parte izquierda */
    background-color: rgba(0, 0, 0, 0.3); /* Fondo semitransparente */
    color: white;  /* Color del texto */
    padding: 10px; /* Espacio interno para mejorar la apariencia */
    text-decoration: none; /* Elimina el subrayado del enlace */
    border-radius: 20px;
}

.titulo {
    border-radius: 10px;
    padding: 5px;
    background-color: transparent;/* Fondo transparente */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);

    color: #9a1a81;
    font-family: 'Arial', sans-serif;
    text-shadow:
        -2px -2px 7px #3493bc,   /* Sombra hacia la esquina superior izquierda (negra) */
        2px -2px 0 transparent,    /* Sombra hacia la esquina superior derecha (negra) */
        -2px 2px 0 transparent,    /* Sombra hacia la esquina inferior izquierda (negra) */
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

</style>