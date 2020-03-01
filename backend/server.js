//Pegar o express e colocar na const express, configurando server
const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const portServer = 3000;
const db = require('./Connection.js');

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
    db.query('SELECT * from donors', (err, result) => {
        if (err) {
            return res.send('Erro de banco de dados');
        }
        const donors = result.rows;
        return res.render('index.html', { donors });
    });
});

server.post('/', (req, res) => {
    // Pegar dados do form
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    if (name == "" || email == "" || blood == "") {
        return res.send('Todos os campos são obrigatórios para preencher!');
    }
    // Adiciona doadores do banco
    const query = `
    INSERT INTO donors ("name", "email", "blood") 
    VALUES($1, $2, $3)`;

    const values = [name, email, blood];

    db.query(query, values, (err) => {
        if (err) return res.send('Erro no banco de dados.');
        return res.redirect('/');
    });
});

//Servidor "escuta" a porta especificada
server.listen(portServer, () => {
    console.log("Iniciei o servidor.");
});