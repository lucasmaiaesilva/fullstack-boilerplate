var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile('/build/index.html', {root: __dirname});
});

io.on('connection', function(socket){
	console.log('a user connected');
});

http.listen(4000, function(){
	console.log('listening on *:4000');
});