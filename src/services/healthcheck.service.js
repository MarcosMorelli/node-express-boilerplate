const { Healthcheck } = require('../models');

/**
 * Check if connection with db is good
 * @returns {Promise<boolean>}
 */
const checkConnection = async () => {
  try {
    await Healthcheck.findOneAndUpdate(
      { event: 'check' },
      { event: 'check' },
      {
        new: true,
        upsert: true,
      },
    );
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
  checkConnection,
};
