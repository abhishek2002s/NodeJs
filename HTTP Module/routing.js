const http = require("http");


const server = http.createServer(function(req,res){
    // console.log(req.url);

    if(req.url == "/"){
    res.end("Hello form other side");
    }
    else if(req.url == "/about"){
        res.end("Hello form about side");
    }
    else if(req.url == "/contact"){
        res.end("Hello form contact side");
    }
    else{
        res.end("404 Error Page . Page does nto exist");
    }

})

server.listen(3000,"127.0.0.1",function(){
    console.log("listening to the port no 8000");
});