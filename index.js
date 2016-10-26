var http  = require('http');

const PORT=8080; 
//const SERVER = Math.random();
const SERVER = "Server";

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url + ": SERVER: " + SERVER);
}
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
