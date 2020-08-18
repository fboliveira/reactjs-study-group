import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import api from '../services/api';

// /todos/:id
export default function UpdateTodo() {

    //const [ todo, setTodo ] = useState();
    
    const history = useHistory();

    const { id } = useParams();
    
    const [ name, setName ] = useState('');
    const [ priority, setPriority ] = useState(0);

    const [ nameOriginal, setNameOriginal ] = useState('');
    const [ priorityOriginal, setPriorityOriginal ] = useState(0);

    useEffect(() => {
        api.get(`/todos/${id}`)
            .then((response) => {
                setName(response.data.name);
                setNameOriginal(response.data.name);
                setPriority(response.data.priority);
                setPriorityOriginal(response.data.priority);
            })
    },[id]);

    function handleReset() {
        setName(nameOriginal);
        setPriority(priorityOriginal);
    }

    function handleUpdateTodo(event) {
        event.preventDefault();

        const completed = 0;

        // Validações

        // Enviar a atualização
        // /todos/:id
        api.put(`/todos/${id}`, 
            { name, priority, completed })
            .then(() => {
                alert('Tarefa atualizada com sucesso!');
                history.push('/');
            })
            .catch((error)=> {
                alert(error);
            });

    }

    return(
        <div className="container-form">

            <p className="text-info">ID: {id}</p>

            <form onSubmit={handleUpdateTodo}>
                <div className="form-group">
                    <label>Descrição</label>
                    <input 
                        placeholder="Descrição da tarefa" 
                        className="form-control"
                        value={name}
                        onChange={ event => setName(event.target.value) }
                        />
                </div>

                <div className="form-group">
                    <label>Prioridade</label>
                    <input 
                        placeholder="Prioridade da tarefa"
                        className="form-control"
                        value={priority}
                        onChange={ event => setPriority(event.target.value) }
                     />
                </div>

                <button 
                    type="submit"
                    className="btn btn-primary mr-2"
                >
                Atualizar
                </button>

                <button 
                    type="button"
                    onClick={handleReset}
                    className="btn btn-danger mr-2">
                Limpar
                </button>

                <Link 
                    to="/"
                    className="btn btn-info">
                        Voltar
                </Link>


            </form>
        </div>
    );

}