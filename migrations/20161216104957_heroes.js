exports.up = (knex) =>
{
  return knex.schema.createTable('heroes', (table) =>
  {
    table.increments();
    table.string('name')
      .notNullable()
      .defaultTo('');
    table.string('primary_atribute')
      .notNullable()
      .defaultTo('');
    table.string('attack_type')
      .notNullable()
      .defaultTo('melee');
    table.integer('attack_range')
      .notNullable()
      .defaultTo(150);
    table.integer('base_str')
      .defaultTo(0);
    table.float('str_gain', 2)
      .defaultTo(0);
    table.integer('base_int')
      .defaultTo(0);
    table.float('int_gain', 2)
      .defaultTo(0);
    table.integer('base_agi')
      .defaultTo(0);
    table.float('agi_gain', 2)
      .defaultTo(0);
    table.integer('base_hp')
      .notNullable()
      .defaultTo(200);
    table.float('base_hp_regen', 2)
      .notNullable()
      .defaultTo(0.25);
    table.integer('base_mana')
      .notNullable()
      .defaultTo(20);
    table.float('base_mana_regen', 2)
      .notNullable()
      .defaultTo(0.01);
    table.float('base_armor', 2)
      .notNullable()
      .defaultTo(0);
    table.float('BAT', 2) // base attack time
      .notNullable()
      .defaultTo(1.7);
    table.integer('movespeed')
      .notNullable()
      .defaultTo(300);
    table.float('turn_rate')
      .notNullable()
      .defaultTo(0.5);
    table.integer('base_attack_min')
      .notNullable()
      .defaultTo(0);
    table.integer('base_attack_max')
      .notNullable()
      .defaultTo(0);
    table.integer('day_vision')
      .notNullable()
      .defaultTo(1800);
    table.integer('night_vision')
      .notNullable()
      .defaultTo(800);
    table.integer('collision_size')
      .notNullable()
      .defaultTo(24);
    table.float('base_magic_resistance', 2)
      .notNullable()
      .defaultTo(0.25);
    table.text('lore')
      .notNullable()
      .defaultTo('');
  });
};

exports.down = (knex) =>
{
  return knex.schema.dropTable('heroes');
};
