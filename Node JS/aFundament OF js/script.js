//fundamneatls of javascript::::

//array  and objects
// var arr = [1,2,3,5,"hey",{},true,function(){},[]];

var arr= [1,2,3,4];
//topics:
//foreach: it will return a array

// arr.forEach(function(val){
//   console.log(val + " hello");
// })

//map:: it will return a array of array size with empty data
// var newArr = arr.map(function(val){
//         return val*3;
// })
// console.log(newArr);

//filter:: it will return an array
// var ands = arr.filter(function(val){
    
//     if(val > 3){
//         return true;
//     }
//     else{
//         return false;
//     }

// })

// console.log(ands);

//find::
// var ans = arr.find(function(val){
//     if(val === 2){
//         return val;
//     }
// })
// console.log(ans);


//indexOf:: it will return a boollean value

var index = arr.indexOf(1);
console.log(index);


//object :: key value pairs
var obj = {
    name : "abhishek",
    age: 12,
}

Object.freeze(obj); // it will stop the updation in the object

//how to updation in the object
//obj.age = 25;

//how to access the element inside the obj::
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj['name']);


//function ::

//how yo find the length in the function = it will find according to the nummber of parameter in the function.

// function abcd(a,b,c){

// }

// console.log(abcd.length)

//return::

// function abcd(){
//     return 12;
// }

// var ans = abcd();
// console.log(ans);


//async js coding :::
//line by line code chale isey kahte hai synchronous
//jo bhi code async nature ka ho usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi sara syn code chal jaaye, tab check karo ki async code complete hua hai ya nahi and agar wo complete hua ho to usey main satck mein laao and chla do

async function abcd(){
      var blob =  await fetch(`https://randomuser.me/api/`);

     var ans = await blob.json();
     console.log(ans.results[0].name);
}

abcd();