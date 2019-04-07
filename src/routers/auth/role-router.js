'use strict';

const express = require('express');
const rolesRouter = express.Router();
const Role = require('./roles-model');

/**
 * @name rolesRouter.post()
 * Sends a new role to the database
 */
rolesRouter.post('/roles', (req,res,next) => {
  let role = new Role(req.body);
  role.save();
  res.status(200).send('Saved a new role to the db');
});

module.exports = rolesRouter;
