// expressjs
const express = require('express');

//import express from 'express'; // ES6 -> Node -> >= 13

// Routes -> REST
// GET
// POST
// PUT/PATCH
// DELETE

const routes = express.Router();

const connection = require('./database/connection');

const app = express();

// request query
// www.site.com/?codigo=10

// request params
// www.site.com/produto/10

routes.get('/', (request, response) => {
    return response.json({message: 'Olá, mundo! Restart.'});
});

async function getTodos(response) {
    const todos = await connection('todos')
    .select('*');
    return response.send(todos);
}

routes.get('/todos', (request, response) => {
    return getTodos(response);
});

app.use(routes);

app.listen(3333, () => {
    console.log('TODO server started.');
});

// Sugestão:
// Criar uma tabela de labels -> marcações nas tarefas
// Criar uma relação N-N -> todos - labels