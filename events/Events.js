let EventEmiter = require("events").EventEmitter;
let evEmit = new EventEmiter();

evEmit.on("hello", function hello() {
    console.log("Hello world")
});

evEmit.on("hello", function hello() {
    console.log("Hello again")
});

evEmit.emit("hello");

evEmit.removeListener("hello",function () {
    console.log("hello deleted")
} );

evEmit.emit("hello");