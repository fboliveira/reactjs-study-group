const express = require('express');
const routes = express.Router();

const TodoController = require('./controllers/TodoController');

routes.get('/', (request, response) => {
    return response.json({message: 'Olá, mundo! Restart.'});
});

// get
// post
// put/patch
// delete

routes.get('/todos', TodoController.index);
routes.post('/todos', TodoController.create);

module.exports = routes;