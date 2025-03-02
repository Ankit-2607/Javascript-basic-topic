// ARRAYS

let fullName = ["ankit", "aman", "rony", "rohit", "mohit"];
let mark = [97,86 ,39 ,94 ,57];
// console.log (fullName);
// console.log (mark);

// change number in arrays.

let marks = [48, 58, 45,82,45];
// console.log(marks);
// now to change number at any position,
marks[2] = 71;
// console.log (marks);

// ARRAYS METHODS  .

const cities = ["delhi", "mumbai", "kolkata", "pune"];
// console.log(cities); // (4) ['delhi', 'mumbai', 'kolkata', 'pune']

// 1. PUSH METHODS.

cities.push("punjab", "assam"); //  *PUSH method - adds the element at the last inside the arrays.
// console.log(cities); // (6) ['delhi', 'mumbai', 'kolkata', 'pune', 'punjab', 'assam'] 

// 2. POP METHODS.

cities.pop(); // *POP Method - remove the last element from the arrays.
// console.log(cities); // (3) ['delhi', 'mumbai', 'kolkata']

// 3. TO-STRING METHOD.

let marks_2 = [76, 48, 47, 64, 53];
// console.log(marks_2); //(5) [76, 48, 47, 64, 53]
// console.log(marks_2.toString()); // 76,48,47,64,53 *convert the number/bollean(etc.) into an array to string inside arrays.

// 4. CONCAT METHODS

let marvel = ["ironman", "hulk", "spiderman", "thor"];
let dc = ["superman", "batman","aquaman"];
let bollybood = ["saktiman", "don",];
let heros = marvel.concat(dc , bollybood);// It will add/concatinate all the arrays inside heros,and make one array.
// console.log(heros); //(9) ['ironman', 'hulk', 'spiderman', 'thor', 'superman', 'batman', 'aquaman', 'saktiman', 'don'] = OUTCOME.

// 5. SPREAD METHOD.

let new_heros = [...marvel,...dc,...bollybood]; // Another and easy methods to concatinate multiple arrays in one array.
// console.log(new_heros);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let marvels = ["ironman", "spiderman", "hulk", "antman","loki","captian America","Black Pantter"];
// console.log(marvels);

// // 6. UNSHIFT METHOD.

marvels.unshift("thor"); // Add new element on first position inside an array. 
// console.log(marvels); //(4) ['thor', 'ironman', 'spiderman', 'hulk']

// 7. SHIFT METHOD.

marvels.shift(); // Remove first element from an array.
// console.log(marvels); //(3) ['spiderman', 'hulk', 'antman']

// 8. SLICE METHOD.

let marvel_hero = marvels.slice(1, 4); //slice(start?: number, end?: number). *It gives the slected element of an array.
// console.log(marvel_hero ); //(3) ['spiderman', 'hulk', 'antman']

// // 9. splice method .....

let number = [45 ,56 ,76 ,34 ,23 ,78 ,92];
// console.log (number); // (7) [45, 56, 76, 34, 23, 78, 92]
number.splice(2, 3 , 48, 996); // (syntex Explened in copy.) *Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log (number); // (6) [45, 56, 48, 996, 78, 92]

// // 10.Sparse Arrays ...

let arr = [1, 2, , , , , , , 9, 10];
// console.log(arr); //(10) [1, 2, empty × 6, 9, 10] *Creates an array with length 10 but 4 elements inside, with empty space of 6 element.

// ****** How length of an arrays works in SPARSE ARRAYS ********

let a =[1, 2, 3, 4, 5]; 
a.length = 3; //(3) [1, 2, 3] *delete last element to make it array of length 3.
// a.length = 0;  // [] * Delete all the element to make it array length of 0.
// a.length = 5; //(5) [empty × 5] *If after the length of 0, dosen't matter what the length of your arrays it will be always empty with the index of 5/length define .

// console.log(a);


//****************************** some extra method *****************************************/

// // 11.forEach method .....
// //(1)
//    let arr = [1,2,3,4];

// arr.forEach((value, index ,array) => {
    //    console.log(value , index , array);
    // })
    // //(2)
// let array = ["munger", "jamalpur", "patna", "delhi"];

// array.forEach((value, index, array)=>{
//    console.log(value.toUpperCase(),array);
// });

// //12. MAP
//    let nums = [12 ,13, 26];

//    let newarr = nums.map((value ,index ,array)=>{
//       return value * 3 ;
//    });

//    console.log(newarr);

// // 13. FILTER 
// // example 1- 

// let arr =[23 ,25, 65, 56 ,45, 53, 68, 10, 14, 26];

// let newArr = arr.filter((value)=> {
//    return value % 2 === 0;
// });
//    console.log(newArr);

// // example 2-
// let array = [12, 13, 14, 26, 9, 27, 51, 45, 17];

// let newArray = array.filter((value)=> {
//    return value % 3 === 0;
// });
//    console.log(newArray);

// // 14. Reduce 
// let arr = [1, 2, 3 ,26 , 4];

// let newArr = arr.reduce((previous, current)=>{
//    return previous + current
// });
//    console.log(newArr);

// let newArray = arr.reduce((previous, current)=> {
//    return previous > current ? previous : current;
// });
//    console.log(newArray);



