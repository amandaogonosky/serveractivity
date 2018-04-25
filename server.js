const http = require("node-http-server");
const PORTONE = 7000; 
const PORTTWO =  7500; 

// server.deploy();

function handleRequest(request, response){
response.end("Nice things Path Hit: " + request.url);

}

const serverOne = http.createServer(function(request, response){
const url = requst.url;

if (url.includes ('good')){
 response.end ("Good things to you");
} else {
    response.end("good things Path Hit: " + request.url);  
}
});

server.listen(PORT1, function(){
console.log("Server listening on: http://localhost:" + PORT1);
});

const serverTwo = http.createServer(function(request, response){
    const url = requst.url;
    
    if (url.includes ('goodless')){
     response.end ("Goodless things to you");
    } else {
        response.end("Not as good things? Path Hit: " + request.url);  
    }
    });

server.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:" + PORT2);
    });