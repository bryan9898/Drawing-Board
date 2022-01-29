// Including libraries
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var static = require('node-static'); // for serving files

// This will make all the files in the current folder
// accessible from the web
var fileServer = new static.Server('./');
	
// This is the port for our web server.
// you will need to go to http://localhost:8080 to see it
app.listen(8080);

// If the URL of the socket server is opened in a browser
function handler(request, response) {
	request.addListener('end', function () {
		fileServer.serve(request, response);
	}).resume();
}

// Delete this row if you want to see debug messages
io.set('log level', 1);

// Listen for incoming connections from clients
io.sockets.on('connection', function (socket) {
	// Listen for mouse move events
	socket.on('mousemove', function (data) {
		socket.broadcast.emit('moving', data); // Broadcasts event to everyone except originating client
	});
	socket.on('send message', function(data){
        io.sockets.emit('new message', data);
    });

	 socket.on('send message2', function(data){
        io.sockets.emit('new message2', data);
    });

	socket.on('send message3', function(data){
        io.sockets.emit('new message3', data);
    });

	socket.on('send message4', function(data){
        io.sockets.emit('new message4', data);
    });

	socket.on('send message5', function(data){
        io.sockets.emit('new message5', data);
    });

	socket.on('send message6', function(data){
        io.sockets.emit('new message6', data);
    });
});
