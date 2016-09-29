exports.up = function(knex, Promise) {
  return knex.schema.createTable('brands', function (table) {
    table.increments('id').primary()
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brands')
};
