
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: 'JTHFF2C26B2515141',
          make: 'Lexus',
          model: 'LS',
          year: 2011,
          mileage: 96000,
          manual: false,
          title: 'Clean'
        }, {
          vin: '1G1JF5249W7162279',
          make: 'Chevrolet',
          model: 'Cavalier',
          year: 1998,
          mileage: 252000,
          manual: true,
          title: 'Salvage'
        }, {
          vin: '5HD1CT3157K417590',
          make: 'Harley Davidson',
          model: 'Xl1200',
          year: 2007,
          mileage: 100000,
          manual: false,
          title: 'Clean'
        }
      ]);
    });
};
