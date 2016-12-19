
exports.up = (knex) =>
{
  return knex.schema.createTable('items', (table) =>
  {
    table.increments();
    table.string('name')
    .notNullable();
    table.integer('gold_cost');
    table.float('mana_cost');
    table.float('cooldown');
    table.boolean('disassemblable');
    table.boolean('consumable');
    table.text('description');
    table.string('flavortext');
  });
};

exports.down = (knex) =>
{

};
