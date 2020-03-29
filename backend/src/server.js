//Pegar o express e colocar na const express, configurando server
const express = require('express');
const app = express();
const routes = require('./routes');
const nunjucks = require('nunjucks');
const port = 3000;

// Configurar server p/ apresentar arquivos estáticos(.js, .css ... )
app.use(express.static('../frontend/public'));

//Habilitar body do form
app.use(express.urlencoded({
    extended: true
}));

// Configurando a template engine(nunjucks)
nunjucks.configure('../frontend', {
    express: app,
    noCache: true,
});

app.use(routes);

app.listen(port, () => {
    console.log("Iniciei o servidor.");
});