const Hapi = require('@hapi/hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swaggered');
const HapiSwaggerUI = require('hapi-swaggered-ui');
const routes = require('./lib/routes');

(async () => {
  const server = await new Hapi.Server({
    host: 'localhost',
    port: 8000,
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'Utah Jazz Info & Stats',
          version: '0.0.1',
        },
      },
    },
    {
      plugin: HapiSwaggerUI,
      options: {
        title: 'Utah Jazz Info/Stats',
        path: '/docs',
        swaggerOptions: {
          validatorUrl: null,
        },
      },
    },
  ]);

  routes.forEach((route) => server.route(route));

  try {
    await server.start();
    /* eslint-disable-next-line */
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    /* eslint-disable-next-line */
    console.log('Error: ', err);
  }
})();
