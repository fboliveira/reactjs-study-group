import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaCheck, FaTrashAlt, FaTimesCircle } from 'react-icons/fa';

import api from '../services/api';

// https://react-icons.github.io/react-icons/

// arrow functions.
const ListTodos = () => {

    const [ todos, setTodos ] = useState([]);

    useEffect(() => {
        api.get('/todos')
            .then(response => {
                setTodos(response.data);
                //console.log(response.data);
            })
    }, [todos]);

    function handleComplete(id){

        api.get(`/todos/complete/${id}`)
            .then( response => {
                setTodos([]);
            })

    }

    function handleCancel(id){

        api.get(`/todos/cancel/${id}`)
            .then( response => {
                setTodos([]);
            })

    }    
    return(
        <div className="container">            
            <h2>Lista de tarefas em aberto</h2>

            <Link to="/add" className="btn btn-primary">Adicionar</Link>

            <table className="table table-hover">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tarefa</th>
                        <th>Prioridade</th>
                        <th>Concluir</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>

                    { todos.filter( item => item.completed === 0 ).map( item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.priority}</td>
                        <td><button className="btn btn-link" onClick={()=> handleComplete(item.id)}><FaCheck color="green" size={20} /></button></td>
                        <td><Link to={`/todos/${item.id}`}><FaEdit size={20} /></Link></td>
                        <td><a href="/"><FaTrashAlt size={20} /></a></td>
                    </tr>
                    ))}
                </tbody>

            </table>

            <h2 className="text-success">Tarefas concluídas</h2>

            <table className="table table-hover">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tarefa</th>
                        <th>Prioridade</th>
                        <th>Cancelar</th>
                    </tr>
                </thead>

                <tbody>

                    { todos.filter( item => item.completed === 1 ).map( item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.priority}</td>
                        <td><button className="btn btn-link" onClick={()=> handleCancel(item.id)}><FaTimesCircle size={20} color="red" /></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );

}

export default ListTodos;