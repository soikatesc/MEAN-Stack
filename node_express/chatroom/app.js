// require express and path
var express = require("express");
var path = require("path");

var app = express();
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var count = 0

app.get('/', function(req, res) {
 res.render("index");
})


var server = app.listen(8000, function(){
	console.log("listening on port 8000")
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);

  socket.on("user", function (data){
    console.log(data.name.length)
    if(data.name == 0){
      console.log("ener a valid name")
    }
    else{
      socket.emit('server_response', {name: data});
    }
  
  })

  socket.on("posting_form", function (data){
    console.log(data)
    if(data.message == 0){
      console.log("ener a valid message")
    }
    else{
      socket.emit('server_response', {message: data});
    }

  })

})
