var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);


app.use(express.static(__dirname + "/app"));

app.get('/', function(request, response){
  //response.send('<h1> i am king of node</h1>');
  response.sendFile('app');
});

app.get('/maybe', function(req, res){
  res.send("<p>What am i doint</p>");
});

http.listen(port); //call this after routes given
