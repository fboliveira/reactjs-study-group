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
routes.get('/todos/:id', TodoController.show);
routes.get('/todos/complete/:id', TodoController.complete);
routes.get('/todos/cancel/:id', TodoController.cancel);
routes.post('/todos', TodoController.create);
routes.put('/todos/:id', TodoController.update);

module.exports = routes;