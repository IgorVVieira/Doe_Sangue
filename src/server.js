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

const config = () => {
    app.set('view engine', 'ejs');

    // Configurar server p/ apresentar arquivos estáticos(.js, .css) na pasta public
    app.use(express.static('./public'));

    //Habilitar body do ejs
    app.use(express.urlencoded({
        extended: true
    }));

    app.use(routes);
}

config();

app.listen(port, (err) => {
    if (err) {
        return console.log(`Ocorreu um erro: ${err}`);
    }
    console.log("Iniciei o servidor.");
});