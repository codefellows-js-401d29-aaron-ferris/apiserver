'use strict';

/**
 * Players Model
 * @module models/players/players-model
 */

const Model = require('../mongo-model.js');
const schema = require('./players-schema.js');

class Players extends Model {}
/**
 * Gives access to the mongo-model functions and classes
 * @param  {object} schema
 */
module.exports = new Players(schema);

