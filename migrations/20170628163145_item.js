
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo_item', function(table) {
        table.increments();
        table.string('todo_name').notNullable();
        table.string('todo_description').notNullable();
        table.integer('category_id').references('id').inTable('todo_category');
        table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo_item');
};
