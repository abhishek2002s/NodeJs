//os Module::

const os = require('os');


//to find the architecture of the system
console.log(os.arch());

//to check the host name
console.log(os.hostname());

//to check the pltform name
console.log(os.platform());
console.log(os.tmpdir());


console.log(os.type());

// const freeMemory = os.freemem();
// console.log(`${freeMemory/1024/1024/1024}`);


const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);