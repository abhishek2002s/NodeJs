// express.js framework:
//Introduction to Express.js;
//express js ek npm package hai

//framework -> framewrok ek flow hota hai


//Express js manages everything from receiving the request and giving the response back to the client browser.

//MERN STACK::


//setting up a basic Express application::
// const express = require('express');
// const app = express();

// app.get(route, requestHandler)
// app.get("/",function(req,res){
//     res.end("Hellow world from my side");
// });

// app.get("/profile",function(req,res){
// res.send("champion ki trf se hello world me accha aap kasie ho");
// });

// app.listen(3000);

//Routing::

// app.get("/",function(req,res){
//     res.end("Hellow world from my side");
// });

// app.get("/profile",function(req,res){
//     res.send("champion ki trf abcd efghijklmno se hello world me accha aap kasie ho");
// });

// app.listen(3000);
//Middleware:

//jab bhi server request accept karta hai wha se route ke beech pahuchne tak gar aap use reauqest ko beech me rokte ho an kuch perfrom karte ho,to ye element middleware kehlaata hai.


// const express = require('express');
// const app = express();

// app.use(function(req,res,next){
// console.log("middleware chala");
// next();
// });

// app.use(function(req,res,next){
// console.log("middleware chala ek aur baar");
// next();
// });

// app.get("/",function(req,res){
//     res.end("Hellow world from my side");
// });

// app.get("/about",function(req,res){
//     res.end("Hellow world thi is about page");
// });

// app.get("/profile",function(req,res){
//     res.end("Hellow world thi is profile page");
// });

// app.listen(3000);


//Request and Response handling::

//Frontend backend Frontend
const express = require('express');
const app = express();

app.use(function(req,res,next){
console.log("middleware chala");
next();
});

app.use(function(req,res,next){
console.log("middleware chala ek aur baar");
next();
});

app.get("/",function(req,res){
    res.end("Hellow world from my side");
});

app.get("/about",function(req,res){
    res.end("Hellow world thi is about page");
});

app.get("/profile",function(req,res){
    res.end("Hellow world thi is profile page");
});

app.listen(3000);


//Error handling.
// const express = require('express');
// const app = express();

// app.use(function(req,res,next){
// console.log("middleware chala");
// next();
// });

// app.use(function(req,res,next){
// console.log("middleware chala ek aur baar");
// next();
// });

// app.get("/",function(req,res){
//     res.end("Hellow world from my side");
// });

// app.get("/about",function(req,res){
//     res.end("Hellow world thi is about page");
// });

// app.get("/profile",function(req,res){
// return next(new Error('Something Wnet wrong'));
// });

// app.use((res,req,err,next) => {
//     console.error(err.stack);
//     res.status(500).send('Something Broke!,we dont haive any idea');
// })

// app.listen(3000);


// **********to run nodemon in vs code we use npx nodemon filename