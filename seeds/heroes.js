const data = require('../config/heroes.js');

exports.seed = (knex) =>
{
  return knex('heroes').del()
    .then(() =>
      knex('heroes')
      .insert(data.heroes));
};
