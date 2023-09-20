const mongoose = require('mongoose');

const healthcheckSchema = mongoose.Schema(
  {
    event: {
      type: String,
    },
  },
  {
    minimize: false,
  },
);

/**
 * @typedef Healthcheck
 */
const Healthcheck = mongoose.model('Healthcheck', healthcheckSchema);

module.exports = Healthcheck;
