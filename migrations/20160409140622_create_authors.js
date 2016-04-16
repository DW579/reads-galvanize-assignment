exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', function (table) {
    table.increments();
    table.string('first');
    table.string('last');
    table.text('bio');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('author');
};
