var http_IP = '25.15.212.154';
var http_port = 8080;
var http = require('http');

var server = http.createServer(function(req, res) {  
  require('./router').get(req, res);
}); // end server() 
server.listen(http_port, http_IP);  
console.log('listening to http://' + http_IP + ':' + http_port);