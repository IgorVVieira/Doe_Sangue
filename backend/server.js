//Pegar o express e colocar na const express, configurando server
const express = require("express");
const server = express();
const nunjucks = require("nunjucks");
const donors = require('./Donors.js');
const port = 3000;

// Configurar server p/ apresentar arquivos estáticos(.js, .css ... )
server.use(express.static('../frontend/public'));

//Habilitar body do form
server.use(express.urlencoded({ extended: true }));

// Configurando a template engine(nunjucks)
nunjucks.configure('../frontend', {
    express: server,
    noCache: true,
});

// Configurar a apresentação da página
server.get("/", (req, res) => {
    return res.render('index.html', { donors });
});

server.post('/', (req, res) => {
    // Pegar dados do form
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    // Adiciona doadores ao vetor
    donors.push({
        name,
        blood,
    });
    return res.redirect('/');
});

//Servidor "escuta" a porta especificada
server.listen(port, () => {
    console.log("Iniciei o servidor.");
});