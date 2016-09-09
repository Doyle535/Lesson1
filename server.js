//Link to node's http library
var http = require('http');

//start a local web server on port 3000 and listen for events
http.createServer(function(request, reponse){
				  reponse.writeHead(200); //http status ok
				  reponse.end('Our first page');}
				  ).listen(3000);
console.log('Server running on port 3000');