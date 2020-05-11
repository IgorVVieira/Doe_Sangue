const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');
const connection = require('./database/Connection');

const port = 3001;

connection.authenticate()
    .then(() => {
        console.log('Conexão Ok');
    }).catch((err) => {
        console.log(`Erro: ${err}`);
    });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta : ${port}`);
});