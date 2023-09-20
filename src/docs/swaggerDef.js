const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'node-express-boilerplate API documentation',
    description: 'Open source project of Marcos Morelli',
    license: {
      name: 'MIT',
      url: 'https://github.com/MarcosMorelli/node-express-boilerplate/blob/main/LICENSE',
    },
  },
  externalDocs: {
    url: 'https://github.com/MarcosMorelli/node-express-boilerplate',
    description: 'Find more info here',
  },
  servers: [
    {
      url: `https://morelli-node-boilerplate-95e90e9e70fd.herokuapp.com/v1`,
      description: 'Live demo server',
    },
    {
      url: `http://localhost:${config.port}/v1`,
      description: 'Local server',
    },
  ],
};

module.exports = swaggerDef;
