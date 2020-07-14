// Model -> TodoModel

const connection = require('../database/connection');

module.exports = {

    // index -> listar todos
    // create -> inserir
    // show -> apresentar
    // update -> atualizar
    // delete/destroy -> excluir

    async index(request, response) {

        // Promise - async
        const todos = await connection('todos')
                    .select('*');

        return response.json(todos);

    },

    async create(request, response) {

        const { name, priority } = request.body;

        console.log({ name, priority });

        const [ id ] = await connection('todos')
            .insert({
                name,
                priority
            });

        return response.json({ id });
    }

}