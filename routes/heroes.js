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

router.get('/heroes/:id', (req, res, next) =>
{
  const id = req.params.id;
  knex('heroes')
    .where(
    {
      name: id,
    })
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
