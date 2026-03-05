// Callback - передається в середину іншої функції
function HoF(callback, name) {
    console.log("Hello from HoF");
    callback(name);
}

function sayHi(name) {
    console.log(`Hi ${name}`);
}

function sayBye(name) {
    console.log(`Bye ${name}`);
}

HoF(sayHi,  "John" );
HoF(sayBye, "David");
