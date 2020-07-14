// expressjs
const express = require('express');

//import express from 'express'; // ES6 -> Node -> >= 13

// Routes -> REST
// GET
// POST
// PUT/PATCH
// DELETE

const connection = require('./database/connection');
const app = express();
const routes = require('./routes');

// request query
// www.site.com/?codigo=10

// request params
// www.site.com/produto/10

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('TODO server started.');
});

// 
// Sugestões:
//
// Criar uma tabela de labels -> marcações nas tarefas
// Criar uma relação N-N -> todos - labels
// 
// Lista de tarefas -> inserir os marcadores;
// Lista de tarefas -> filtrar por marcadores;
// Adicionar tarefa -> associar e incluir marcadores;

// Criação do controller de marcadores;
// Métodos -> index e create

// Demais métodos - show, update e delete