<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/projects">Proyectos</router-link>
        <router-link to="/about">Sobre mí</router-link>
        <router-link to="/contact">Contacto</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2024 - Mauro Barua. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

main {
  flex-grow: 1; /* Permite que el contenido principal crezca para ocupar el espacio entre el header y el footer */
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

#app {
  min-height: 100vh; /* 100% de la altura del viewport */
  width: 100vw;  /* 100% del ancho del viewport */
  background-color: rgba(0, 0, 0, 0.7);
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #333;
  margin: 0;        /* Asegúrate de que no haya margen en el contenedor principal */
  padding: 0;
  overflow-x: hidden; /* Evita cualquier scroll horizontal */
  display: flex;
  flex-direction: column;
}

header {
  background-color: #aa1a71;
  padding: 10px;
  margin-bottom: 20px;
}

header nav {
  display: flex;
  justify-content: center;
  gap: 15px;
}

header nav a {
  color: white;
  text-decoration: none;
}

footer {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: left;
  padding: 5px;
}
</style>