const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'node-express-boilerplate API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/MarcosMorelli/node-express-boilerplate/blob/main/LICENSE',
    },
  },
  servers: [
    {
      url: `https://morelli-node-boilerplate-95e90e9e70fd.herokuapp.com/v1`,
    },
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
