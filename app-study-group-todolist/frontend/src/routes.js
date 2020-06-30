import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Routes -> caminho de navegação nas páginas
// Página principal -> /
// Adicionar -> /todo/add

// Atualizar -> id ? -> /todo/update/:id

import ListTodos from './pages/ListTodos';
import AddTodo from './pages/AddTodo';
import UpdateTodo from './pages/UpdateTodo';

export default function Routes() {

    return(
        <BrowserRouter>
            <Route path="/" exact component={ListTodos} />
            <Route path="/add" component={AddTodo} />
            <Route path="/update/:id" component={UpdateTodo} />
        </BrowserRouter>
    );

}