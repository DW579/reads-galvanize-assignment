
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authorbook').del(),

    // Inserts seed entries
    knex('authorbook').insert({id: 1, authors_id: 1, books_id: 1}),
    knex('authorbook').insert({id: 2, authors_id: 5, books_id: 1}),
    knex('authorbook').insert({id: 3, authors_id: 6, books_id: 1}),
    knex('authorbook').insert({id: 4, authors_id: 2, books_id: 2}),
    knex('authorbook').insert({id: 5, authors_id: 3, books_id: 3}),
    knex('authorbook').insert({id: 6, authors_id: 4, books_id: 4}),
    knex('authorbook').insert({id: 7, authors_id: 4, books_id: 5}),
    knex('authorbook').insert({id: 8, authors_id: 4, books_id: 6})
  );
};
