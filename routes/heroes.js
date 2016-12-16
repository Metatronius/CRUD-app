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
