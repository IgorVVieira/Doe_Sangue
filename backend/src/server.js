//Pegar o express e colocar na const express, configurando server
const express = require('express');
const server = express();
const routes = require('./routes');
const port = 3000;


server.use(routes);
//Servidor "escuta" a porta especificada
server.listen(port, () => {
    console.log("Iniciei o servidor.");
});