const { channel } = require("diagnostics_channel");
const express = require("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
//relative absolute
// console.log(__dirname);

// console.log(path.join(__dirname,"../public"));

const staticPath = path.join(__dirname,"../public");
// const partialPath = path.join(__dirname,"../views/partials");
// const templatePath = path.join(__dirname,"../views/templatyes");
// const templatePath = path.join(__dirname,"../templates");
//to set the view engine::
app.set("view engine","hbs");
// hbs.registerPartial(partialPath);
//to set the view with another name::
// app.set('views',templatePath);

//built in middleware
// app.use(express.static(staticPath));

// template engine route
app.get("/",function(req,res){
    res.render('index',{
        channelName : "rahul",
    });
})

// app.use(express.json());
// app.use(express.urlencoded({extended : true}));

// app.get("/",function(req,res){
//     res.write("<h1>welcome to my page</h1>");
//     res.write("<h1>welcome to my page</h1>");
//     res.send();
// });
 
app.get("/",function(req,res){
    res.render('index',{
        channelName : "rahul",
    });
})



app.get("/about",function(req,res){
    res.end("welcome to my contact page");
});





//how to add 404 page in webiste

app.get('/about/*',function(req,res){
    res.render('404',{
        errorcomment: "oops this about us page couldnt found",
    });
})

app.get('*',function(req,res){
    res.render('404',{
        errorcomment: "oops page couldnt found",
    });
})


app.listen(3000);
