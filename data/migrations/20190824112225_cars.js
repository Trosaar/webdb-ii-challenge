
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 17).unique().notNullable();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.integer('year', 4).notNullable();
    tbl.integer('mileage', 6).notNullable();
    tbl.boolean('manual');
    tbl.enu('title', ['Clean', 'Memorandum', 'Bonded', 'Owner-Retained', 'Salvage'])
  })
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('cars');
};
