
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo_category', function(table) {
    table.increments();
    table.string('category_name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo_category');
};