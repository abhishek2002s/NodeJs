//hum log kuch bhi data frontend par browser par rakh sakte hai and jab bhi aap kuch bhi request backend par karoge wo fe par saved data automatically backned par chala jaaygea

//tumne toh bheja th plain text par server ko mila blob which is not directly readable ab is cheej ko handl karna padega  ki hum us blob ko waapas se readable kar sake

const express = require('express');
const app = express();


//in do code ka use blob text ko readable form me convert krne ke liye use kiya jata hai
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.end("champion maera bahi");
});

app.get("/about", function(req,res){
    res.send("about page hai");
});

app.get("/profile",function(req,res,next){
    return next(new Error("Not implemented"));
});

app.listen(3000);


//session  - jab aap login rhte ho kisi webpage per tabhi tak us per kaam kar sakte ho isi cheej ko hum session khte hai 

// express-session is a middleware module in Express. js that allows you to create sessions in your web application. It stores session data on the server side, using a variety of different storage options, and allows you to track the activity of a user across requests


//cookie - jab app kisi web server per jaate ho or login krte ho tab aap ko remember krne ke liye serve apko ek string deta wo string hi appka cookies kehlata hai