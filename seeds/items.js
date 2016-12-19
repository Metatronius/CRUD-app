
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then( () =>
     {
      return Promise.all([
        // Inserts seed entries

      ]);
    });
};
