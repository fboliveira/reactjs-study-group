import React from 'react';

import ListTodos from './pages/ListTodos';
import AddTodo from './pages/AddTodo';

export default function App() {
  return (
    <div>
      <ListTodos />
      <AddTodo />
    </div>
  );
}