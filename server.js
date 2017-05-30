'use strict'

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 3080 });

server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, reply) => {
        // reply({ message: 'Hello from the API server' });
        reply('Test a string');
    }
});

server.start(err => {
    if (err) throw err;
    console.log(`Server listening on port ${server.info.uri}`);
})