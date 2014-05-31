
var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000 , {
	cors : true,
});

// Hello world route
server.route({
    method: 'GET',
    path: '/user',
    handler: function (request, reply) {

          reply({ name: 'John' });

    }
});


server.route({
    method: 'GET',
    path: '/',
    handler:  {
		file : {
			path : 'app/index.html'
		}        
    }
});

// static route for files
server.route({
    method: 'GET',
    path: '/{param}',
    handler:  {
		directory : {
			path : 'app'
		}        
    }
});

// Start the server
server.start();
