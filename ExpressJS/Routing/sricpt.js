// www.thapa.com - welcome to my home page
//about page
//contact page
//
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.end("welcome to my page");
});

app.get("/about",function(req,res){
    res.end("welcome to my about page");
});
app.get("/contact",function(req,res){
    res.end("welcome to my contact page");
});

app.listen(3000);
