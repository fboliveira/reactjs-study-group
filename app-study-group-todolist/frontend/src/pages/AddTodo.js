import React from 'react';
import { Link } from 'react-router-dom';

export default function AddTodo() {
    
    function handleAddTodo(event) {
        event.preventDefault();
    }

    return(
        <div className="container-form">
            <form onSubmit={handleAddTodo}>

                <div className="form-group">
                    <label>Descrição</label>
                    <input 
                        placeholder="Descrição da tarefa" 
                        className="form-control"
                        />
                </div>

                <div className="form-group">
                    <label>Prioridade</label>
                    <input 
                        placeholder="Prioridade da tarefa"
                        className="form-control"
                     />
                </div>

                <button 
                    type="submit"
                    className="btn btn-primary mr-2"
                >
                Cadastrar
                </button>
            
                <button 
                    type="reset"
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