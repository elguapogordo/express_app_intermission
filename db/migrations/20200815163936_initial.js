// exports.up = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.createTable('papers', function(table) {
//       table.increments('id').primary();
//       table.string('title');
//       table.string('author');

//       table.timestamps(true, true);
//     }),

//     knex.schema.createTable('footnotes', function(table) {
//       table.increments('id').primary();
//       table.string('note');
//       table.integer('paper_id').unsigned()
//       table.foreign('paper_id')
//         .references('papers.id');

//       table.timestamps(true, true);
//     })
//   ])
// };


// exports.down = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.dropTable('footnotes'),
//     knex.schema.dropTable('papers')
//   ]);
// }
// this was the format from knex.js docs:
exports.up = function(knex) {
  return knex.schema
    .createTable('papers', function (table) {
      table.increments('id').primary();
      table.string('title');
      table.string('author');

      table.timestamps(true, true);
    })
    .createTable('footnotes', function (table) {
      table.increments('id').primary();
      table.string('note');
      table.integer('paper_id').unsigned()
      table.foreign('paper_id')
        .references('papers.id');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('footnotes')
    .dropTable('papers');
};