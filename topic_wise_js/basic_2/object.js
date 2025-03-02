// // // OBJECT literals.


// const mysym = Symbol("key1")
// const mysym2 = Symbol("key2")

// const item ={
//     fullName: "ankit kumar",   // string
//     age: 24,   // number or integer
//     isfollow: true,     //booleans
//     "nick_name" : "Ritik Raj", //you can't access with .(dot) operater, you have to access with square brackets.
//     mysym : "key1", // you can't insert symbol like this ,
//     [mysym2] : "key2",
// }
// // console.log(item);

// item.fullName = "Ankit Kumar";
// // Object.freeze(item); // after freezeing object no-one can change the value of that object property.(the code will run till before the freeze method.)
// item.fullName = "sonu kumar";

// // // to acess the variable in two ways inside 'item' object one by one or manualy.
// // console.log(item.fullName); // mainly we have to access in this form. 
// // console.log(item["fullName"]); // but many time we have to use this type of method to access.

// // console.log(item.age); 
// // console.log(item["age"]);

// // console.log(item.isfollow);
// // console.log(item["isfollow"]);

// // console.log(item.mysym); //key1 * it will give string datatype reather then symbole.
// // console.log(typeof item.mysym); //string .
// // console.log(item[mysym2]); // right way to acess symbol in object.
// // console.log(typeof item[mysym2]); // Symbol(key2): "key2" .


// //********** Nested object ***************
// const regularUser = {
//     email : "some@gmail.com",
//     fullName :{
//         userFullName :{
//             firstName : "ankit",
//             lastName : "kumar",
//         }
//     }
// }

// // console.log(regularUser.fullName.userFullName.firstName);

// // *********** how to murge two and more string ******************
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// // const obj3 = {obj1 , obj2}  //{obj1: {1: 'a', 2: 'b'}, obj2: {3: "c", 4: "d"}}
// // const obj3 = Object.assign({},obj1,obj2) //{1: 'a', 2: 'b', 3: 'c', 4: 'd'} 
// const obj3 = {...obj1, ...obj2 } //{1: 'a', 2: 'b', 3: 'c', 4: 'd'}
// // console.log(obj3);
// // const onj5 = Object.create(null);
// // console.log(onj5);

// let o = new Object();
// // console.log(o);





//+++++++++++++ loops in objects 

let myobject = {
    js : "javascript",
    cpp : "c++",
    rb : "rubby",
    py : "python"
}

for (const key in myobject) {
    // console.log(myobject[key]);
}