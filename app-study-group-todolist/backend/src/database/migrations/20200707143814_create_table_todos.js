
exports.up = function(knex) {
  
    return knex.schema.createTable('todos', function(table) {

        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('priority').notNullable().defaultTo(0);
        table.boolean('completed').notNullable().defaultTo(false);

    });

};

exports.down = function(knex) {
  return knex.schema.dropTable('todos');
};
