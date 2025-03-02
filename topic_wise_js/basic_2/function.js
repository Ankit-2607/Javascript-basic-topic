function myName() {
    console.log("A");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("t");
}

// myName();

// function sum(num1, num2) {
//     // console.log(num1 + num2);
// }
function sum(num1, num2) {
    // let result = num1 + num2;
    // return result  //return the value with variable decleared.
    return num1 + num2  // direct way to return the value.
}

let result = sum(4, 8);
// console.log(result);


//scope Example with return keyword.
function loggedIn(userName){
    if (!userName){
        console.log("please enter your name");
        return
    }
    return `${userName} just logged in.`
}

// console.log(loggedIn()); // Undefine *when if statement is 
// console.log(loggedIn("Ritik")); // Ritik just logged in.



// To pass multiple item in one parameter.
function calculateCardPrice(...num){ // the parameter with three dots can pass multiple items, there is no limit of items.
    return num
}

// console.log(calculateCardPrice(499, 245, 645, 359)); //[499, 245, 645, 359] *it will return multiple item in arrays.


// How to pass Object in function.
const user ={
    username : "ankit",
    price : 200
}

function handleObject(user){
    // console.log((`username is ${user.username} and price is ${user.price}`));
}


// How to pass array in function
const newArray = [500, 300, 745, 363, 785]

function returnArray(getArray){
    return getArray[3]
}
// console.log(returnArray(newArray));


//*************************** Arrow Function **************************

()=>{} // basic structrue of arrow function 

const arrowfun = ( num1 , num2) => {          // arrow function stored in variable name.
    return num1 + num2
    
}

const arrowfun2 =(num1 , num2) => num1 + num2   // here we do not need to use 'return' keyword because in one line code we do not use {} bracket , 
                                                    // so it is understand able that this value will return value (only in one line code).

const arrowfun3 = (num1, num2) => (num1 + num2) // here also we do not need to use return keyword because here we are not using cerly braces.

// in short when we give statement in one line without curly brackes , we do not need to use return keyword, other wise we have to use return keyword  
// console.log(arrowfun(4, 3));
// console.log(arrowfun2(6, 1));
// console.log(arrowfun3(5, 2));


// How to use object in function 
const arrowfun4 = ()=> ({username :"ritik"})   // to use object in function, use curve bracket and then put object in that.
console.log(arrowfun4());




//****************************This keywords ********************/
const users = {
    username : "ritik",
    price : 699,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);  //this means current content (inside same block of code).
        // console.log(this);
        
    }

}
// users.welcomeMessage()
// users.username = "ankit"
// users.welcomeMessage()

// console.log(this); //{} *so empty object means this keyword is not reffereing to any scope of code.


//Checking if 'this' keyword work in funtion or not.
function hello (){
    let username = "ritik"
    // console.log(this.username);   // undefined *because 'this' keyword not work in function it work in object. 
    // console.log(this);
    
}
hello() 

const arrowfuntion = () => {
    let username = "ankit"
    // console.log(this);
    // console.log(this.username);
    
}
arrowfuntion()

// Immediately Invoked Function Expressions (IIFE)  (video = 24, chai aur code)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
