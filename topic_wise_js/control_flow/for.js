
//++++++++++++++++++++++++++++++++++++++++++    for of loop    +++++++++++++++++++++++++++++++++++++++++++++++

for (const element of object) {

}            //*basic structure of for-of loops


// * For-of loop mainly used in Array, String and it can be used in object because object is iterable.

let arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
};

let str = "hello world";
for (const hlw of str) {
    // console.log(hlw);
};

const myobject2 = {
    game : "pubg",
    game2 : "valo"
}

for (const [key, value] of myobject2) {
    // console.log(key , value);    // myobject is not iterable.
    
}

//++++++++++++++++++++++++++++++++++++++++++++++    for-in loop   +++++++++++++++++++++++++++++++++++++++++++++++

for (const key in object) {
    
}           //basic structure of for-in loop


// * for-in loop mainly used in 'Object', it can be used in array but we don't use it because it don't have keys defined mainually

const myobject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift :'swift by apple'
}

for (const key in myobject) {
    // console.log(key);
    // console.log(myobject[key]);
    // console.log(`${key} shortcut is for ${myobject[key]}`);
    
}

const programming = ["js","rb", "py","java", "cpp"]
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
    
}



//+++++++++++++++++++++++++++++++++++++++++++++    For-Each    +++++++++++++++++++++++++++++++++++++ 

let coding = ["js", "ruby", "java", "python", "c++"];

coding.forEach( function (item) {       // by using basic function 
    // console.log(item);
    
} )

coding.forEach( (item) => {       // by using arrow function 
    // console.log(item);
} )


coding.forEach( function (item , index , arr) {
    // console.log(item, index , arr);
    
} )

// *forth way to print or execute for-Each method

function printme(item){
    // console.log(item);
    
}
coding.forEach(printme);

let mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
];

mycoding.forEach( (value) => {
    // console.log(value);
    console.log(value.languageName)
} )