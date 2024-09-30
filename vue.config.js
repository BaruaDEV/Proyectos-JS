const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        // definimos alias para nuestra carpeta views
        '@views': path.resolve(__dirname, 'src/views'),
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/Proyectos-JS'
  : '/'
});
