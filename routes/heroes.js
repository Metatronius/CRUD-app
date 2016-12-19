const knex = require('../knex');
const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/heroes', (_req, res, next) =>
{
  knex('heroes')
    .then((result) =>
    {
      res.send(result);
    })
    .catch((err) =>
    {
      next(err);
    });
});

router.get('/heroes/:name', (req, res, next) =>
{
  const name = req.params.id;
  knex('heroes')
    .where('name', name)
    .first()
    .then((result) =>
    {
      res.send(result);
    })
    .catch((err) =>
    {
      next(err);
    });
});
router.post('/heroes', (req, res, next) =>
{
  knex('heroes')
    .insert(
    {
      name: req.body.name,
      primary_attribute: req.body.attribute,
      attack_type: req.body.attack,
      attack_range: req.body.range,
      base_str: req.body.str,
      base_agi: req.body.agi,
      base_int: req.body.int,
      str_gain: req.body.strg,
      agi_gain: req.body.agig,
      int_gain: req.body.intg,
      base_hp: req.body.hp,
      base_hp_regen: req.body.hpregen,
      base_mana: req.body.mana,
      base_mana_regen: req.body.manaregen,
      base_armor: req.body.armor,
      BAT: req.body.bat,
      movespeed: req.body.ms,
      turn_rate: req.body.turn,
      base_damage_min: req.body.mindamage,
      base_damage_max: req.body.maxdamage,
      day_vision: req.body.day_vision,
      night_vision: req.body.night_vision,
      collision_size: req.body.collision_size,
      base_magic_resistance: req.body.resistance,
      lore: req.body.lore,
    }, '*')
    .then((result) =>
    {
      res.send(result[0]);
    })
    .catch((err) =>
    {
      next(err);
    });
});
router.patch('/heroes/:name', (req, res, next) =>
{
  knex('heroes')
    .update(
    {
      name: req.body.name,
      primary_attribute: req.body.attribute,
      attack_type: req.body.attack,
      attack_range: req.body.range,
      base_str: req.body.str,
      base_agi: req.body.agi,
      base_int: req.body.int,
      str_gain: req.body.strg,
      agi_gain: req.body.agig,
      int_gain: req.body.intg,
      base_hp: req.body.hp,
      base_hp_regen: req.body.hpregen,
      base_mana: req.body.mana,
      base_mana_regen: req.body.manaregen,
      base_armor: req.body.armor,
      BAT: req.body.bat,
      movespeed: req.body.ms,
      turn_rate: req.body.turn,
      base_damage_min: req.body.mindamage,
      base_damage_max: req.body.maxdamage,
      day_vision: req.body.day_vision,
      night_vision: req.body.night_vision,
      collision_size: req.body.collision_size,
      base_magic_resistance: req.body.resistance,
      lore: req.body.lore,
    }, '*')
    .where('name', req.params.name)
    .then((result) =>
    {
      res.send(result[0]);
    })
    .catch((err) =>
    {
      next(err);
    });
});
router.delete('heroes/:name', (req, res, next) =>
{
  const name = req.params.id;
  knex('heroes')
    .del()
    .where('name', name)
    .first()
    .then((result) =>
    {
      res.send(result);
    })
    .catch((err) =>
    {
      next(err);
    });
});
module.exports = router;
