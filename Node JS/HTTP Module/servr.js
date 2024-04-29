// JSON - javascript Object Notation
//JSON is a lightweight
//format for storing and transporting data.
//json is often used when data is sent from a server to a web page.

const fs = require("fs");


const bioData = {
    name : "vinod",
    age : 26,
    channel : "abhishek",
};

// //object to convert into JSON file
// // {"name":"vinod","age":26,"channel":"abhishek"}
// const  jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// //JSOn to object coverter
// const objData = JSON.parse(jsonData);
// console.log(objData);

//tsk -1::
//Covert ot JSON
//Durse file me add krdena
//readfile 
//agin convertback to its object

// const jsonData= JSON.stringify(bioData);
// fs.writeFile("json1.json",jsonData,function(err){
//     if(err) console.error(err);
//     else {
//         console.log("Done")
//     }
// });


let originalData;
fs.readFile("json1.json","utf-8",function(err,data){
    if(err) console.error(err);
    else {
        // console.log(data);
 ///covert JSON into object
        originalData = JSON.parse(data);
        console.log(originalData);
    }
});

