var http  = require('http');

const PORT=8080; 
//const SERVER = Math.random();
const SERVER = Math.random();
var i =0;
//We need a function which handles requests and send response
function handleRequest(request, response){
    i++;
    response.end('It Works!! Path Hit: ' + request.url + ": SERVER: " + SERVER + "\n" + new Date().toLocaleString() + "\n" + i );
}
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
