//Pegar o express e colocar na const express, configurando server
const express = require('express');
const app = express();
const routes = require('./routes');
const connection = require('./database/Connection');

const port = 3000;

connection.authenticate()
    .then(() => {
        console.log('Conexão Ok');
    }).catch((err) => {
        console.log(`Erro: ${err}`);
    });

app.set('view engine', 'ejs');

// Configurar server p/ apresentar arquivos estáticos(.js, .css ... )
app.use(express.static('./public'));

//Habilitar body do html
app.use(express.urlencoded({
    extended: true
}));

app.use(routes);

app.listen(port, () => {
    console.log("Iniciei o servidor.");
});