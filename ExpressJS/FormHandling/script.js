//hum log kuch bhi data frontend par browser par rakh sakte hai and jab bhi aap kuch bhi request backend par karoge wo fe par saved data automatically backned par chala jaaygea

//tumne toh bheja th plain text par server ko mila blob which is not directly readable ab is cheej ko handl karna padega  ki hum us blob ko waapas se readable kar sake

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.end("champion maera bahi");
});

app.get("/about", function(req,res){
    res.send("about page hai");
})

app.get("/profile",function(req,res,next){
    return next(new Error("Not implemented"));
});

app.listen(3000);


//session 
//cookie