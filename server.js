var Hapi = require('hapi');

var entries_module = require('./timelog');


// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000 , {
	cors : true,
});


// log entries rest server
server.route(entries_module);


// angular index
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
    path: '/{param*}',
    handler:  {
		directory : {
			path : 'app'
		}        
    }
});

// Start the server
server.start();
