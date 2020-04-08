const connection = require('../database/Connection');
const bloods = require('../models/Bloods');

module.exports = {
    index(req, res) {
        connection.query('SELECT * from donors', (err, result) => {
            if (err) {
                return res.send('Erro de banco de dados');
            }
            const donors = result.rows;
            return res.render('index.html', {
                donors
            });
        });
    },

    insert(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const blood = req.body.blood;

        if (name === "" || email === "" || blood === "") {
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

        connection.query(query, values, (err) => {
            if (err) {
                return res.send('Erro no banco de dados.');
            }
            return res.redirect('/');
        });
    },

    delete(req, res) {
        const queryDelete = `DELETE FROM "donors"`;
        connection.query(queryDelete, (err) => {
            if (err) {
                return res.send('Erro no banco de dados.');
            }
            return res.redirect('/');
        });
    },
};