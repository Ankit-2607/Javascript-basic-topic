// // Date 

// let myDate = new Date()
// // console.log(myDate); //Sun Dec 01 2024 13:53:51 GMT+0530 (India Standard Time)

// // console.log(myDate.toString()); //Sun Dec 01 2024 13:52:02 GMT+0530 (India Standard Time)

// // console.log(myDate.toDateString()); // Sun Dec 01 2024

// // console.log(myDate.toISOString()); // 2024-12-01T08:21:49.275Z

// // console.log(myDate.toJSON()); //2024-12-01T08:22:24.587Z

// // console.log(myDate.toLocaleDateString()); // 12/1/2024

// // console.log(myDate.toLocaleString()); //12/1/2024, 1:53:17 PM

// // console.log(myDate.toLocaleTimeString()); //1:53:28 PM

// // console.log(myDate.toTimeString()); //13:53:41 GMT+0530 (India Standard Time)

// // console.log(typeof myDate); //object


// //++++++++++++++++++++++++++ Manually given Date Method +++++++++++++++++++++++++++++++++++

// // let myCreatedDate = new Date(2024, 11, 1); // only date 
// // let myCreatedDate = new Date(2024, 11, 1, 2, 3); // Date with time 
// // let myCreatedDate = new Date("2024-12-1"); // Date with formation of YY/MM/DD
// let myCreatedDate = new Date("11-01-2024"); // Date with formation of MM/DD/YY

// // console.log(myCreatedDate.toDateString()); // Sun Dec 01 2024  *months are start form 0 and end with 11 (0 = January , 11 = December)
// // console.log(myCreatedDate.toLocaleString()); // 12/1/2024, 2:03:00 AM


// // +++++++++++++++++++++++++++++++++ Time Stamps ++++++++++++++++++++++++++++++++

// let myTimeStamp = Date.now()
// // console.log(myTimeStamp); //1733043581021 (milisecond)

// let newDate = new Date()
// // console.log(newDate); //Date_time.js:42 Sun Dec 01 2024 14:30:12 GMT+0530 (India Standard Time)
// // console.log(newDate.getMonth()); // 11(December when we write code)   *month start with 0 index.
// console.log(newDate.getDay()); // 0 (sunday when we write code) *days also work like month, days are start with 0 index.

// // +++++++++++++++++++++++++++++ To display date and time in own style in which we want ++++++++++++++++++++++++++++++ 
// newDate.toLocaleString('default', {
//     weekday:"narrow"
// });

let x = 'abcdefghij'




