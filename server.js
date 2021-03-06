// Including libraries
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var static = require('node-static'); // for serving files

// This will make all the files in the current folder
// accessible from the web
var fileServer = new static.Server('./');
	
// This is the port for our web server.
// you will need to go to http://localhost:8080 to see it
app.listen(8081);

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

	socket.on('clear',function (data) {
		socket.broadcast.emit('clear', data); // Broadcasts event to everyone except originating client
	});
	socket.on('clear2',function (data) {
		socket.broadcast.emit('clear2', data); // Broadcasts event to everyone except originating client
	});
	socket.on('clear3',function (data) {
		socket.broadcast.emit('clear3', data); // Broadcasts event to everyone except originating client
	});
	socket.on('clear4',function (data) {-
		socket.broadcast.emit('clear4', data); // Broadcasts event to everyone except originating client
	});
	socket.on('clear5',function (data) {
		socket.broadcast.emit('clear5', data); // Broadcasts event to everyone except originating client
	});
	socket.on('clear6',function (data) {
		socket.broadcast.emit('clear6', data); // Broadcasts event to everyone except originating client
	});

	socket.on('send message', function(data){
        io.sockets.emit('new message', data);
    });

	socket.on('voting', function(data){
		socket.broadcast.emit('voting', data);
    });

	socket.on('voting2', function(data){
        socket.broadcast.emit('voting2', data);
    });

	socket.on('voting3', function(data){
        socket.broadcast.emit('voting3', data);
    });

	socket.on('voting4', function(data){
        socket.broadcast.emit('voting4', data);
    });
	socket.on('voting5', function(data){
        socket.broadcast.emit('voting5', data);
    });
	socket.on('voting6', function(data){
        socket.broadcast.emit('voting6', data);
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
