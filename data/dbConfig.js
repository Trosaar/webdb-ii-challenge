const knex = require('knex');
const config = require('../knexfile.js')

// knex needs config
module.exports = knex(config.development)
