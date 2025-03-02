// // for loop
// for(a = 0; a < 10; a++){
//     console.log(a+1);
// }

// //for-in loop
// const object = { a: 1, b: 2, c: 3 };  // *used for object 

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

// //for-of loop 
// const array1 = ['hello', 'hey', 'welcome'];  // *used for array

// for (const element of array1) {
//     console.log(element);
// }


//while loop
let n = 1;

while (n < 6) {
    console.log(n);
    n++;
}

//do-while loop 
let result = '';
let i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result); //string
