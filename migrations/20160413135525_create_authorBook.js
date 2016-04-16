exports.up = function(knex, Promise) {
  return knex.schema.createTable('authorsbooks', function (table) {
    table.increments();
    table.integer('authors_id');
    table.integer('books_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authorsbooks');
};
