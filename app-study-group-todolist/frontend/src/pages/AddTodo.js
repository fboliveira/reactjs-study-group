import React from 'react';

export default function AddTodo() {

    return(
        <div className="container-form">
            <form>

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
                    className="btn btn-primary"
                >
                Cadastrar
                </button>
            </form>
        </div>
    );

}