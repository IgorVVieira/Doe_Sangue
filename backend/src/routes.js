const express = require('express');
const routes = express();
const nunjucks = require('nunjucks');
const db = require('./Connection');
const bloods = require('./Bloods');


// Configurar server p/ apresentar arquivos estáticos(.js, .css ... )
routes.use(express.static('../frontend/public'));

//Habilitar body do form
routes.use(express.urlencoded({
    extended: true
}));

// Configurando a template engine(nunjucks)
nunjucks.configure('../frontend', {
    express: routes,
    noCache: true,
});

// Configurar a apresentação da página
routes.get("/", (req, res) => {
    db.query('SELECT * from donors', (err, result) => {
        if (err) {
            return res.send('Erro de banco de dados');
        }
        const donors = result.rows;
        return res.render('index.html', {
            donors
        });
    });
});

routes.post('/', (req, res) => {
    // Pegar dados do form
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    if (name == "" || email == "" || blood == "") {
        return res.send('Todos os campos são obrigatórios para preencher!');
    }
    // Verifica se o tipo sanguíneo está incorreto
    else if (bloods.indexOf(blood) === -1) {
        return res.send('O tipo sanguíneo está incorreto');
    }

    // Adiciona doadores do banco
    const query = `
    INSERT INTO donors ("name", "email", "blood") 
    VALUES($1, $2, $3)`;

    const values = [name, email, blood];

    db.query(query, values, (err) => {
        if (err) {
            return res.send('Erro no banco de dados.');
        }
        return res.redirect('/');
    });
});

// Deletar um doador
routes.post('/deleteOne', (req, res) => {
    const queryDel = `DELETE FROM "donors" WHERE name = ${global.name} `;
    db.query(queryDel, (err) => {
        if (err) {
            return res.send('Erro no banco de dados');
        }
        return res.redirect('/');
    })
});

// Deletar todos os donors
routes.delete('/delete', (req, res) => {
    const queryDelete = `DELETE FROM "donors"`;
    db.query(queryDelete, (err) => {
        if (err) {
            return res.send('Erro no banco de dados.');
        }
        return res.redirect('/');
    });
});

module.exports = routes;