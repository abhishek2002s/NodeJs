//Folder operations :: 

// writeFolder
// appendFolder
// rename a folder
// delete a foler
//read a folder



//create a folder::
const fs = require('node:fs');

// const directoryName = "testDir";

// fs.mkdir(directoryName, function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })


// fs.mkdir("index",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

// 2. check directory exist

// if(fs.existsSync("testDir")){
//     console.log("Directory Exist");
// }
// else{
//     console.log("not exist");
// }


// 3. append in aa folder

// fs.appendFile(`${"testDir"}/${"hello"}`,"Hello world i am abhishek",function(err){
//     if(err) console.error(err);
//     else console.log("Append successfully");
// })

// 4.read a folder

// fs.readdir("testDir", function(err,data){
//     if(err) console.error(err);
//     else console.log(data);
// })


// 5 .. Delete a folder

// fs.rmdir("index",function(err){
//     if(err) console.error(err);
//     else console.log("Folder delete");
// })

//6 . rename afolder :

fs.rename("testDir","Dir",function(err){
    if(err) console.error(err);
    else console.log("Rename Successfully");
})