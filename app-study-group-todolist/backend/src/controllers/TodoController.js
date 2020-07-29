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
    },

    // /todos/:id
    async show(request, response) {

        const id = request.params.id;

        const todo = await connection('todos')
                        .where('id', '=', id)
                        .select('*')
                        .first();
        return response.json(todo);

    },

    // url -> id - 
    // body -> name, priority
    // /todos/update/1
    async update(request, response) {

        const id = request.params.id;
        const { name, priority } = request.body;

        await connection('todos')
            .where('id', '=', id)
            .update({
                'name': name,
                'priority': priority
            }).then(() => {
                return response.json({ id, name });
            }).catch((error) => {
                return response
                        .status(400)
                        .send({'message': 'Update error',
                            error});
            });

    },

    async delete(request, response) {

        const id = request.params.id;

    }

}