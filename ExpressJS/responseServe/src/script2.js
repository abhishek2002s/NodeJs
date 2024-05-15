const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.write("<h1>welcome to my page</h1>");
    res.write("<h1>welcome to my page</h1>");
    res.send();
});

app.get("/about",function(req,res){
    res.end("welcome to my about page");
});
app.get("/contact",function(req,res){
    res.end("welcome to my contact page");
});
app.get("/temp",function(req,res){
    // res.send([
    //     {
    //     id:1,
    //     name:"abhishek",
    // },
    // {
    //     id:1,
    //     name:"abhishek",
    // },
    // {
    //     id:1,
    //     name:"abhishek",
    // },
    // {
    //     id:1,
    //     name:"abhishek",
    // },
    res.json([
        {
        id:1,
        name:"abhishek",
    },
    {
        id:1,
        name:"abhishek",
    },
    {
        id:1,
        name:"abhishek",
    },
    {
        id:1,
        name:"abhishek",
    },
]);
});

app.listen(3000);
