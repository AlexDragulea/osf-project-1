
var express = require('express');


/**
 * in other tutorials you might see it like this:
 * var app = express.createServer();
 *but at the time of these writing express
 *applications do not intherit from
 *http.Server anymore
 */
 
 
 var app = express();
 
 app.get('/', function(request, response){
	 
	 response.sendfile(__dirname + 'index.html');
	 
 });
 
 app.listen(8080);
 console.log('Listening on port 8080...');