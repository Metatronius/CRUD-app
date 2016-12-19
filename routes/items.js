const knex = require('../knex');
const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/items', (_req, res, next) =>
{
  knex('items')
    .then((result) =>
    {
      res.send(result);
    })
    .catch((err) =>
    {
      next(err);
    });
});

router.get('/items/:name', (req, res, next) =>
{
  const name = req.params.id;
  knex('items')
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
router.post('/items', (req, res, next) =>
{
  knex('items')
    .insert(
    {
      name: req.body.name,
      gold_cost: req.body.gold,
      mana_cost: req.body.mana,
      cooldown: req.body.cooldown,
      disassemblable: req.body.disassemblable,
      consumable: req.body.consumable,
      description: req.body.description,
      flavortext: req.body.flavortext,
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
router.patch('/items/:name', (req, res, next) =>
{
  knex('items')
    .update(
    {
      name: req.body.name,
      gold_cost: req.body.gold,
      mana_cost: req.body.mana,
      cooldown: req.body.cooldown,
      disassemblable: req.body.disassemblable,
      consumable: req.body.consumable,
      description: req.body.description,
      flavortext: req.body.flavortext,
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
router.delete('items/:name', (req, res, next) =>
{
  const name = req.params.id;
  knex('items')
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
