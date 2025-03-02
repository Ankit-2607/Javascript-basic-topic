// // To print something.
// console.log("Ankit kumar");
// console.log("welcome to java script");

// // Variable rules .
// // fullName = "Ritik raj";
// // // age = "23";
// console.log("ankit kumar");
// console.log(22);

// // to print in different line with single code --
// console.log("ankit\nkumar\n22");
// // note - we can print this in on string form even number are also written in string form ==

// // to print in different line with a line gape between them --
// console.log("ankit");
// console.log("");
// console.log("kumar")
// // console.log(fullName);
// // console.log(age);

// // let, const and var .
// // let age ="21";
// // let age ="23";
// // let age ="24";

// let age ="21";
// age ="23";
// age ="24";
// console.log(age);

// // OBJECT .
// const item ={
//     fullName: "ankit kumar",
//     age: 24,
//     isfollow: true,
// }
// console.log(item);

// // to change any value and to print single value .
// item.age = item.age +1;
// item.fullName = "ritik raj";

// console.log(item.age);
// console.log(item.fullName);

// // Arithmetic operators .
// let a = 5 ;
// let b = 3;
// console.log(" a =", a  , "b =" ,b );
// console.log( "a + b = " ,a + b ); // 8
// console.log( "a - b = " ,a - b ); // 2
// console.log( "a * b = " ,a * b ); // 15
// console.log( "a / b = " ,a / b ); // 1.666
// console.log( "a % b = " ,a % b ); // 2 (remainder)
// console.log( "a ** b = " ,a ** b ); // 125 (5 to the power 3 )
// console.log("++a =" , ++a ); // 6 (pre icrement)
// // console.log("a++ =" , a++); // 5 (post increment)
// // console.log( "a =" , a); // 6 (post increment )
// // same method will used in decrement operators
// console.log(a++)
// console.log(a);
// console.log(++a);
// console.log(--a);
// console.log(a--);
// console.log(a);

// //  Assignmemt operators .
//  let x = 5 ;
//  let y = 2 ;
//  console.log("x =" ,x , "y =" ,y)
//  console.log(" x += 4 =" ,x += 4);
//  console.log(" x -= 4 =" ,x -= 4);
//  console.log(" x *= 4 =" ,x *= 4);
//  console.log(" x /= 4 =" ,x /= 4);
//  console.log(" x %= 4 =" ,x %= 4);
//  console.log(" x **=  =" ,x **= 4);
//  //( to check the real value of that operator, comment out the upper code of assignment operators. )

// // Comparison operators .
// let m = 5 ;
// let n = 2 ;
// console.log ("m==n =" , m==n); // false
// console.log ("m===n =" , m===n);// false
// console.log ("m!=n =" , m!=n); // true
// console.log ("m!==n =" , m!==n); // true
// console.log ("m>n =" , m>n); // true
// console.log ("m>=n =" , m>=n); //true
// console.log ("m<n =" , m<n); // false
// console.log ("m<=n =" , m<=n); // false

// // Logical operators .
//  let u = 6 ;
//  let v = 5 ;
//  console.log("u<v && u===v" , u<v && u===v);// false
//  console.log("u>v && u>=v" , u>v && u>=v); // true

//  console.log("u<v || u===v" , u<v || u===v); //false
//  console.log("u>v || u<=v" , u>v || u<=v); // true

//  console.log("!(u<v)" ,!(u<v)); //true
//  console.log("!(u>v)" ,!(u>v)); //false

// Conditional statements .
// if statements
// let age = 15;

// if (age >= 18 ) {
//     console.log("you can vote");
// }
// if (age < 18) {
//     console.log("you cannot vote");
// }

// let mode = "dark";
// if (mode === "dark") {
//     color = "black"
// }
// if ( mode === "light") {
//     color = " white"
// }
// console.log(color);

// // if-else statements.
// let mode ="dark";
// if (mode === "dark"){
//     color = " black";
// } else {
//     color = "white";
// }
// console.log(color);

// // else-if statements.
// let mode ="red";
// let color
//     if(mode === "dark"){
//         color = "black";
//     } else if (mode === "blue"){
//         color = "blue";
//     } else if (mode ==="pink"){
//         color = "pink";
//     } else {
//        color = "white";
//     }
//     console.log(color);

// // Ternary operators.
// let age = 15 ;
//  let result = age >= 18 ? "adult" : "not adult";
//  console.log(result);

//  // Loops

// //  // for loop
//  for( let a = 1; a <=20; a++){
//     console.log("Ankit kumar")
// }

// let sum = 0 ;
// for( let i= 1 ; i<= 5 ; i++){
//     sum= sum + i; //sum = 15
// }
// console.log("sum =" , sum);

// // while loop.

// let i= 1 ;
// while (i<= 5){
//     console.log(i);
//     i++ ;
// }

// // // do while loop
// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while (i<= 10);

// // for of loop
//     let str = "ankit kumar";
//     let num = 0;
//     for( let val of str){
//     console.log (val);
//     num++;
// }
// console.log("ankit kumar =", num);

// // for in loop .

// let boy = {
//     fullName : "ankit kumar",
//     age : 24 ,
//     ispass : true ,
//     Num : 80 ,
// };
//   for ( let key in boy){
//     console.log ( key , boy[key]);

//   }

// STRINGS
// create string
// let str = "Apple" ;
// console.log(str);

// let test = 'one\"line'
//     console.log(test);

// // string length .
// let string = "georaphy"
// console.log(string)
// str .length
// length = 8

// // string  indices .
// let str = "apple";
// console.log(str);
// let string =str[4];
// console.log(string); // e = outcome

// // TEMPLATE LITERALS .
//    let template =  `this is template literals`;
//    console.log (template);
//    // any thing inside backtics is string

// // string interpolation.
//      let obj = {
//         item : "pen",
//         price : 22 ,
//      };
//      console.log ("the price of ", obj.item ,"is", obj.price , "rupees"); //this is normal way to print string.

//      let output = `the cost of ${obj.item} is ${obj.price} rupees`;
//      console.log(output); //this is template literals methods.

// STRING PROPERTIES .
// //  1. uppercase
// let fullName = "ankit kumar";
// let name = fullName.toUpperCase();
// console.log(name); // ANKIT KUMAR = outcome

// // 2. lowercase
// let fullName = "Ankit Kumar";
// let name = fullName.toLowerCase();
// console.log (name); // ankit kumar = outcome

// // 3. slice property.
// let fullName = "harry"
// console.log (fullName);
// let name = fullName.slice (2,4);
// console.log (name); //rr = outcome

// // 4. replace property .
// let fullName = "harry bhai";
// console.log (fullName);
// let name = fullName.replace("bhai", "potter");
// console.log(name); // harry potter = outcome.

// // 5. concat property .
// let fullName = "harry";
// let lastName = "naman";
// let name = fullName.concat(lastName);
// console.log (name); // harrynaman = outcome .

// ARRAYS

// let fullName = ["ankit", "aman", "rony", "rohit", "mohit"];
// let mark = [97,86 ,39 ,94 ,57];
// console.log (fullName);
// console.log (mark);

// change number in arrays.

// let marks = [48, 58, 45,82,45];
// console.log(marks);
// // now to change number at any position,
// marks[2] = 71;
// console.log (marks);

// for loop

// let fullName= ["ankit" , "aman", "rony", "rohit", "mohit"];
// for (let i= 0 ; i< fullName.length ; i++){
//   console.log (fullName[i])
// }

// // for of loop .
// let cities =["delhi", "mumbai", "pune", "assam", "punjab"];
// for(let city of cities){
//   console.log(city);
// }
// //and many more loop like this.

// ARRAYS METHODS  .
// 1. Push methods.
//  let cities = ["delhi", "mumbai", "kolkata", "pune"];
//  console.log(cities);
//  cities.push("punjab", "assam");
//  console.log(cities);

// 2. pop methods.
//  let cities = ["delhi", "mumbai", "kolkata", "pune"];
//  console.log(cities);
//  cities.pop();
//  console.log(cities);

// 3. to-string method.
// let marks = [76, 48, 47, 64, 53];
// console.log(marks);
// console.log(marks.toString());

// 4. concat mathod .
// let marvel = ["ironman", "hulk", "spiderman", "thor"];
// let dc = ["superman", "batman","aquaman"];
// let bollybood = ["saktiman", "don",];
// let heros = marvel.concat(dc , bollybood);
// console.log(heros);
// //(9) ['ironman', 'hulk', 'spiderman', 'thor', 'superman', 'batman', 'aquaman', 'saktiman', 'don'] = OUTCOME.

// // 5. unshift method .
// let marvels = ["ironman", "spiderman", "hulk"];
// console.log(marvels);
// marvels.unshift("thor");
// console.log(marvels);

// 6. shift method.
// let marvels = ["ironman", "spiderman","hulk" ,"thor", "antman"];
// console.log(marvels);
// marvels.shift();
// console.log(marvels);

// 7. slice method.
// let marvels = ["ironman", "spiderman", "loki","thor","hulk","antman"];
// console.log(marvels);
// let heros = marvels.slice(1,4);
// console.log(heros);

// // 8. splice method .....
// let number = [45 ,56 ,76 ,34 ,23 ,78 ,92];
// console.log (number);
// number.splice(2, 3 , 48, 996);
// console.log (number);
// // (7) [45, 56, 76, 34, 23, 78, 92]
// // (6) [45, 56, 48, 996, 78, 92]

// // 9.forEach method .....
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

// //10. MAP
//    let nums = [12 ,13, 26];

//    let newarr = nums.map((value ,index ,array)=>{
//       return value * 3 ;
//    });

//    console.log(newarr);

// // 11. FILTER 
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

// // 12. Reduce 
// let arr = [1, 2, 3 ,26 , 4];

// let newArr = arr.reduce((previous, current)=>{
//    return previous + current
// });
//    console.log(newArr);

// let newArray = arr.reduce((previous, current)=> {
//    return previous > current ? previous : current;
// });
//    console.log(newArray);


// // FUNCTION
// function myfunction() {
//     console.log("ankit kumar")
//     console.log("ritik raj")
// }
// myfunction()

// function myfunction(msg, abc, asd){
//     console.log(msg *abc *asd)
// }
// myfunction(34 ,35, 12)

// function greet(name ,secname) {  // 'name' is the parameter
//     console.log("Hello, " + name + secname + "!");
//   }

//   greet("Alice" , " how are you");  // "Alice" is the argument passed to the parameter 'name'

// function sum(x,y){
//     s = x+y ; // what will given value will do and we store the outcome of that value in 's'.
//     return s; // 'return' the outcome of 's' will return and store in 'sum ' function .
// }
// let val = sum(4,56); // and we store 'sum' value in 'let'
// console.log (val);

// let sum = (a,b)=> {
//    return (a+b);
// }
// let arrowsum = sum(3,7);
// console.log(arrowsum);


// // ELEMENT SELECTER
// let head = document.getElementById("heading");
// let logo = document.getElementsByClassName("logo");
// let div = document.getElementsByTagName("div");
// console.dir(head);
// console.dir(logo);
// console.dir(div);

// QUERY SELECTER 

// let firstEl = document.querySelector(".logo"); //return 1st element related to that element .
// console.dir(firstEl);
// let element = document.querySelectorAll("h1"); //return all h1 tag which are inside the body . ("id / class / tagname")
// console.log(element)
// let menu = document.querySelector("nav");
// console.dir(menu)

// PROPARTY
        // All these property will run in console for better understanding the difference between them .

// Tag name / node name
// console.log(menu.tagName);

//innerHTML
// console.log(menu.innerHTML);

// inner Text
// console.log(menu.innerText);

// change inner text 
// menu.innerText = "welcome"
// console.log(menu.innertext)

//change inner HTML'
// menu.innerHTML = "<h1><i>welcome</i></h1>"
// console.log(menu.innerHTML);


// ATTRIBUTES 

// let menu = document.querySelector("nav");
// console.log(menu);
// let div = menu.getAttribute("id");
// console.log(div)

// let menu = document.querySelector("nav");
// let div = menu.setAttribute("id", "navbar");
// console.log(div);

// let menu = document.querySelector("nav");
// console.log(menu.setAttribute("id","navbar")); // SHORTHAND 

// // STYLE ATTRIBUTES
// let header = document.querySelector("header");
// header.style.backgroundColor = "pink";
// header.style.fontSize = "30px";


// // INSERT ELEMENT . 
        // TO insert element we have to do 2-step 
            // 1- we have to creat element which we want to insert.
            // 2- we have to set the position where we want to insert .
//     // append method
// let button = document.createElement("button")
// button.innerText = "tap here";  // 1-step 
// let header = document.querySelector("header");
// header.append(button); // 2-step
//     //perpend method
// let button2 = document.createElement("button")
// button2.innerText = "click me";
// let header_end = document.querySelector("header");
// header_end.prepend(button2);
//      //short method
// let heading = document.createElement("h1");
// heading.innerHTML ="<u>hello i am ankit</u>";
// document.querySelector("body").prepend(heading);
//     //before method
// let button3 = document.createElement("button");
// button3.innerText= "tap me";
// let header_before = document.querySelector("header");
// header_before.before(button3);
//     //after method
// let button4 = document.createElement("button");
// button4.innerText = "press me";
// let header_after = document.querySelector("header");
// header_after.after (button4);
//     //delete ELement 
// let heading2 = document.querySelector("#heading2");
// heading2.remove();


// CALLBACK()
// function mainfunction(callback){
//         // console.log('preforming operation ...')
//         setTimeout(function(){
//                 callback("Operation complete");
//         },1000);
// };
//  // Define the callback function
// function nextfuntion(result){
//         console.log(result);
        
// }
// mainfunction(nextfuntion);

// let number = [1, 2, 3, 4, 5];

// function numberfunction(callback){
//         number.forEach(callback);
// }

// function callbacknumber(number){
//         console.log(number)
// }
// numberfunction(callbacknumber);

//  // question 1
// let a = "ankit"
// let b = 8;
// console.log(a+b);

//  // question 2
// console.log(typeof(a+b));
//  // question 3
// const c = {
//     name : "ankit",
//     section : 12 ,
//     roll : 5,
// }
// //  c = 35 ;

//  // question 4
//  c ['fullname'] = "ankit kumar"
//  console.log (c);

//  // question 5
// let d = {
//     hangry : "feeling irritable or irrationally angry as a result of being hungry",
//     solidarity : "community of feelings, purposes , interests , or responsibilities ",
//     mackle : "to blur, as from a double impression in printing",
// }
// console.log (d.solidarity);

// const firstNumber = parseFloat(prompt("Enter the first number"));
// const secondNumber = parseFloat(prompt("Enter the second number"));

// const addition = firstNumber + secondNumber;
// const subtraction = firstNumber - secondNumber;
// const multiplication = firstNumber * secondNumber;
// const division = firstNumber / secondNumber;

// alert("addition:" + addition);


// console.log("addition:" + addition);
// console.log("subtraction:" + subtraction);
// console.log("Multiplication:" + multiplication);
// console.log("Division:" + division);

// let abc = 'yo\'re right ,it can\'t be a quote';
// console.log (abc);
// const a = prompt("enter your first number");
// const b = prompt("enter your second number")


// //property assess expression (from book page-64)

// let o = {x : 1, y : {z : 3}};
// let a = [o,  4 , [5, 6]];

// console.log(o.x);
// console.log(o.y.z);
// console.log(o["x"]);
// console.log(a[1]);
// console.log(a[2]["1"]);
// console.log(a[0].y);
