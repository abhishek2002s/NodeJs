//path module ::

const path = require('path');

// //to find the dirctory name:
// console.log(path.dirname('C:/Users/abhishek soni/OneDrive/Desktop/Backend Development/Path Module/path_module.js'));

// //to find the extnesion of file
// console.log(path.extname('C:/Users/abhishek soni/OneDrive/Desktop/Backend Development/Path Module/path_module.js'));

// //to find the name of file

// console.log(path.basename('C:/Users/abhishek soni/OneDrive/Desktop/Backend Development/Path Module/path_module.js'));

//to do all thing in one step

// console.log(path.parse('C:/Users/abhishek soni/OneDrive/Desktop/Backend Development/Path Module/path_module.js'));

const mypath = path.parse('C:/Users/abhishek soni/OneDrive/Desktop/Backend Development/Path Module/path_module.js');
console.log(mypath.name);
console.log(mypath.root);
console.log(mypath.dir);