var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 3001 
});

// Add the route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
		var templatePath = require.resolve('./hello.marko');
		var template = require('marko').load(templatePath);
		
		var out = require('fs').createWriteStream('teste.html', 'utf8');

		// Render the template to 'index.html'
		template.stream({
				name: 'Frank',
				count: 30
			})
			.pipe(out);
		
		
    }
});

// Start the server
server.start();


