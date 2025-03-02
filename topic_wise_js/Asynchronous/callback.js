
// Callback :- A callback is a function passed as an argument to another function, allowing the latter to execute the callback function at a specific time, often after completing an operation.


// syntex

function mainFunction(param1, callbackFunction) {
    // Perform some tasks
    callbackFunction(); // Invoke the callback.
}


//example.1

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("GFG", sayGoodbye);