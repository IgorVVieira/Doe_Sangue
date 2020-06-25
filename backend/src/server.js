const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');
const connection = require('./database/Connection');

const port = process.env.PORT || 3001;

try {
    connection.authenticate();
} catch (error) {
    console.log(`Erro: ${error}`);
}

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta : ${port}`);
});