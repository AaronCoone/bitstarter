var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var index_html = fs.readFileSync('index.html').toString();

console.log(index_html);
 
app.get('/', function(request, response) {
  response.send(index_html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
