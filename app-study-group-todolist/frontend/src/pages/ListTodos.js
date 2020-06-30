import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaCheck, FaTrashAlt, FaTimesCircle } from 'react-icons/fa';

// https://react-icons.github.io/react-icons/

// arrow functions.
const ListTodos = () => {

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

                    <tr>
                        <td>2</td>
                        <td>Criar o backend da aplicação</td>
                        <td>1</td>
                        <td><a href="/todo/end/2"><FaCheck color="green" size={20} /></a></td>
                        <td><Link to="/update/2"><FaEdit size={20} /></Link></td>
                        <td><a href="/todo/del/2"><FaTrashAlt size={20} /></a></td>
                    </tr>

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

                    <tr>
                        <td>1</td>
                        <td>Criar o fronted da aplicação</td>
                        <td>1</td>
                        <td><a href="/todo/cancel/1"><FaTimesCircle size={20} color="red" /></a></td>

                    </tr>
                </tbody>
            </table>

        </div>
    );

}

export default ListTodos;