// The http.createServer() method includes request and response parameter which is supplied by nodejs.


// ..The request object can be used to get information about hte current HTTP request 
// e.g. url, request header, and data.

//The response object can be used to send a response fora current HTTP request.

//if the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type::

// const http = require("http");

// //to create a server

// const server = http.createServer(function(req,res){
//     // console.log(req.url);
//     res.end("Hello form other side");

// })

// server.listen(3000,"127.0.0.1",function(){
//     console.log("listening to the port no 8000");
// });