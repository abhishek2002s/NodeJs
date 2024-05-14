// const exp = require("constants");
const express = require("express");
const app = express();
const path = require('path');


app.get("/",function(req,res){
    res.send("hello from the express server");
})

const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));
//built in middleware



app.listen(3000, () => {
    console.log(`listening to the prt`)
});