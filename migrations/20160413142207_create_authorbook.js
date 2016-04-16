exports.up = function(knex, Promise) {
  return knex.schema.createTable('authorbook', function (table) {
    table.increments();
    table.integer('authors_id');
    table.integer('books_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authorbook');
};
