<template>
    <div class="contact">
        <h1>Contactos</h1>
        <h3> { MAURO BARUA } </h3>
        <p> DEVELOPER WEB </p>
        <br><br>
        <div class="contact-indirectos">
            <img src="@/assets/logo-gmail.png">
            <p> maurobarua77@gmail.com </p>
            <img src="@/assets/logo-wa.png">
            <p> +54 9 116406-0677 </p>
        </div>
    
        <a href="https://www.linkedin.com/in/mauro-barua-b2b549273/">
<<<<<<< HEAD
        <img src="@/assets/linkedin.png" alt="link a linkedin" class="img-link">
        </a>
        <a href="https://github.com/BaruaDEV">
        <img src="@/assets/logotipo-de-github.png" alt="link a github" class="img-link">
        </a>
        <a href="https://www.instagram.com/maurobarua/">
        <img src="@/assets/logo-ig.png" alt="link a IG" class="img-link">
=======
        <img src="@/assets/linkedin.png" alt="link a linkedin" class="img-link" target="_blank">
        </a>
        <a href="https://github.com/BaruaDEV">
        <img src="@/assets/logotipo-de-github.png" alt="link a github" class="img-link" target="_blank">
        </a>
        <a href="https://www.instagram.com/maurobarua/">
        <img src="@/assets/logo-ig.png" alt="link a IG" class="img-link" target="_blank">
>>>>>>> 6b55eeb (Reinicialización del repositorio después de borrar .git)
        </a>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message:''
            }
        }
    },
    methods: {
        submitForm() {
            //Aquí puedo agregar validación y enviar el formulario.
            alert(`Mensaje enciado por ${this.form.name}`);
        }
    }
}
</script>

<style scoped>
.contact {
    position: relative;
    background-image: url('@/assets/fondo.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; /* Fija la imagen en su lugar */
    min-height: 100vh;   /* Asegura que cubra el 100% de la altura de la pantalla */
    width: 100vw;       /* Asegura que cubra el 100% del ancho de la pantalla */
    overflow-x: hidden; /* Evita cualquier scroll horizontal innecesario */
    color: white;

    opacity: 0;                              /* el titulo comienza invisible */
    transform: traslateY(20px);              /* se mueve un poco hacia abajo */
    animation: fadeIn 4s ease-out forwards;  /* duracion 2 segundos */
}
@keyframes fadeIn{
    to{
        opacity:1;                            /* aparece */
        transform: traslateY(0);              /* vuelve a su posicion */
    }
}

a {
    padding: 10px;
}

img {
    width: 40px
}

.img-link {
    background-color: rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.1); /* Fondo negro con 10% de transparencia */
    width: 3vw;
    margin: 10px;
    height: auto;
    transition: box-shadow 0.4s ease;
    border-radius: 50%;
    object-fit: cover;
    display: inline-block;
}

.img-link:hover {
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.9);
}
</style>