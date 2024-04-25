const fs = require('node:fs');

//file operations :: 

// writefile
// appendfile
// copyFile;
// rename
// unlink
//read a file

//read a file:

fs.readFile("hey.txt",'utf8', function(err,data){
    if(err) console.error(err);
    else console.log(data);
})

// //create a file ::
// fs.writeFile("hey.txt","hey hello kaise ho aap log",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

//add data to the file ::
// fs.appendFile("hey.txt","mai to accha hu", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

//rename a file::
// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

//copy a file::
// fs.copyFile("hello.txt","Day2/copy/copy.txt",function(err){
//     if(err) console.error(err.message);
//     else console.log("Done");
// })


//delete a file::
// fs.unlink("hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// //delete a folder::
// fs.rm("Day2/copy",{recursive:true},function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })


//hw :::

//how to read a file
//how to read a folder
//how to create a folder
//how to add file in a folder
//how to rename a folder
