//Event module
//Node.js has a built-in module,called "Events",
//where you can create- , fire-, asn listen to your own events.

//Example 1- Registering for the event to be fired only one time using once

//example 2 - Create an event emitter instance and register a couple of callbacks

//Example 3 - resgitering for the event with callback parameter


const EventEmitter = require('events');

const event = new EventEmitter();

//ex 1:

// event.on("myEvent", () => {
//     console.log("your name is abhishek");
// });

//The concept is quite simple: emitter objects emit named events that cause prevoiusly registered listener to be called. So, an emitter object basically has two main features:

//emitting name events.
//regestering and unregistering listener functions.

//ex.2 :
// event.on("myEvent", () => {
//     console.log("your name is shivprasad");
// });


// event.on("myEvent", () => {
//     console.log("your name is soni");
// });


// event.emit('myEvent');


//ex 3::
event.on('checkPage',(sc,msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit('checkPage',200,"ok");




