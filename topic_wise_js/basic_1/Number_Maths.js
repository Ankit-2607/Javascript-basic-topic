const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);


// +++++++++++++++++++++ Number Functions/Methods +++++++++++++++++++++++++++
// console.log(balance.toString().length); // 100(string) *convert the number to string value.
// console.log(balance.toFixed(2)); // 100.00 *convert the output in decimal.

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // 123.9 *round of the last digit of (4-digit given from starting)
// console.log(otherNumber.toPrecision(3)); // 124  *same(3-digit given from the starting)
// console.log(otherNumber.toPrecision(2)); // 1.2e+2 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000  *According to indian count system.
// console.log(hundreds.toLocaleString()); //1,000,000  *According to international count system.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // 4 
// console.log(Math.round(4.6)); // 5 *Round off the number according to the systme we study in school.
// console.log(Math.ceil(4.2)); // 5 *Round off the number to its nearest largest number always
// console.log(Math.floor(4.9)); // 4 *Round off the number to its nearest lowest number always
// console.log(Math.min(4, 3, 6, 8)); // 3 *It will return minimum number amongs the given numbers.
// console.log(Math.max(4, 3, 6, 8)); // 8 *It will return maximum number amongs the given numbers.
// // and many more method see in mdn.

// console.log(Math.random());  //0.07191482615976663  *Generat random number form 0 to 1 in points
// console.log((Math.random()*10) + 1); //4.633688145270327  *Generat random number form 1 to 10 in points. +1 help it not make them smaller then 1.
// console.log(Math.floor(Math.random()*10) + 1); // 3 *Generat random number from 1 to 10 and (Math.floor) make it round to lowest round of .

const min = 10
const max = 20

// console.log(Math.floor(Math.random()*(max - min + 1)) +min) 

// *explane part by part from above console.
// console.log(Math.floor(Math.random()))
// console.log(Math.random())
// console.log((Math.random()*(max - min + 1)));
// console.log(Math.floor(Math.random()*(max - min + 1)))
