//1 way
//Reading from a stream
//create a readable stream
//handle stream events -> data, end and error


const fs = require("fs");
const http = require("http");


const server = http.createServer();


server.on("request",(req,res) => {
    
    var fs = require('fs');
// fs.readFile("input.txt","utf-8",(err,data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });
    
    
    
    
    //2nd way
    //Reading from a stream
    //create a redable stream
    //Handle stream events --> data,end,and error
    
    // const rstream = fs.createReadStream("inputs.txt");
    // rstream.on('data', (chunkdata) => {
    //         res.write(chunkdata);
    // });

    // rstream.on('end', () => {
    //     res.end();
    // });

    // res.on('error', (err) => {
    //     console.log(err);
    //     res.end("file not found");
    // } )

//3rd way
const rsstream  = fs.createReadStream("input.txt");
rsstream.pipe(res);

});
server.listen(8000,"127.0.0.1");
