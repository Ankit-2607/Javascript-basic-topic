
// Async & Await :-  Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. 


//syntex
    // To make async function write the "async" keyword in front of that function.
    // Async function always return promise. If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.
    // The await keyword is used to wait for a promise to resolve. It can only be used within an async block. Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.


// async function api() {
//     let y = await 'hello Ankit kumar';
//     console.log(y);
// }

// console.log('1');
// api();
// console.log('2');



// example 1
function getData(dataId){
    return new Promise ((resolve , reject) => {
        setTimeout(() => {
            console.log('data :- ', dataId)
            resolve("sucess")
        }, 2000);
    });
    }

async function getAllData (){
    await getData(1)
    await getData(3)
    await getData(2)
    await getData(4)
}

getAllData();