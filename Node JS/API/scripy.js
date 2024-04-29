const http = require("http");
const fs = require("fs");

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

    else if(req.url == "/userAPI"){
        // res.end("HEllo from user APi");
        fs.readFile(`${__dirname}/userAPI/userAPI.json`, "utf-8",function(err,data){
            if(err) console.error(err);
            console.log(data);
            const objData = JSON.parse(data);
            console.log(objData[0].name);
        })
    }
    else{
        res.writeHead(404);
        res.end("<h1> 404 Error Page . Page does nto exist </h1>");
    }

});

server.listen(3000,"127.0.0.1",function(){
    console.log("listening to the port no 8000");
});