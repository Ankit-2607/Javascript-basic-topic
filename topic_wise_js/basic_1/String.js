const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);  // h  *To access the letter from poisition value.
// console.log(gameName.__proto__); // *To see all the function of string in console. 


// console.log(gameName.length); // 13 *To declare/see the length of the string.
// console.log(gameName.toUpperCase()); // HITESH-HC-COM  *To make them in capitial letter. 
// console.log(gameName.charAt(2)); // t *to access the letter from position value.
// console.log(gameName.indexOf('t')); // 2 *To access the position value of that letter.

const newString = gameName.substring(0, 4)
// console.log(newString); //hite  *To slice string by there position value.(last position value will not include.) 

const anotherString = gameName.slice(-14,-9) //slice(start?: number, end?: number)
// console.log(anotherString);//hite *To slice them (both are same) but in this we can do with there negative position value also.

const newStringOne = "   hitesh    "
// console.log(newStringOne); //   hitesh    * It will print string with space 
// console.log(newStringOne.trim()); //hitesh * It will trim all the space given in the string from start and end (not from the middle of the string).  

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary *It will replace value with give value.

// console.log(url.includes('sundar')) //false *It will see if the given string/value is inside string, if "yes" it give True ,other wise it will give false. 

// console.log(gameName.split('-')); //(3)['hitesh', 'hc', 'com']  *It will convert the string on the basics of given value ('_') into an array. 
                                    //And the length of the array depends on the basis of ,how many time the value('_') is present inside the string.