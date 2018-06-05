//give us your http

var http = require('http');

//make us a server with that http

http.createServer(function(request, response){
	
	//we're 200... ok
	
	response.writeHead(200);
	
	//achievement unlocked!
	
	response.write('Hello ISF interns!');
	
	//end mission
	
	response.end();
	
}).listen(8080);

//let us know you are working 

console.log('Listening on port 8080...');