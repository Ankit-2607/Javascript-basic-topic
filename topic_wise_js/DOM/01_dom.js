// +++++++++++++++++++++++++++++++++++++++++++    Access item by using element selector    +++++++++++++++++++++++++++++++++++++++++


// When we access element using Element selector  [i.e getElementByClassName(""),getElementById(""),getElementByTagName("")]
// They will return 'HTML Collection' of that element. In 'HTML Collection' we can not access single item directly ,
// First we have to convert the 'HTML Collection' in Array by using  " Array.from() ".
// After that we can access the 'single item' by using 'index value' and 'whole list' by using 'forEach()' method.



// document.getElementsByClassName("list-item")
// HTMLCollection(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]

// const one = document.getElementsByClassName("list-item")
// undefined

// one
// HTMLCollection(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]

// Array.from(one)
// (5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]

// const conOne = Array.from(one)
// undefined

// conOne
// (5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]

// conOne[2].style.backgroundColor = 'orange' 
// 'orange'  // *access single item form list 

// conOne.forEach(function (li) {
//     li.style.color = "orange"
// })       // *access whole list 
// undefined


// ++++++++++++++++++++++++++++++++++++     Access item by using query selector All     ++++++++++++++++++++++++++++++++++++++++++++


// When we access the element by 'querySelectorAll("")
// It will return the 'NodeList' of that element, and NodeList behave bit like array so we can access the 'single item' and 'whole list'.
// For 'single item' we can directly put the 'index value' of that item that we want to change.
// And for 'whole list' we can use 'forEach()' method to change 


// document.querySelectorAll(".list-item")
// NodeList(5) [li.list-item, li.list-item, li.list-item, li.list-item, li.list-item]

// const two = document.querySelectorAll('.list-item')
// undefined

// two.style.color = 'blue' 
// VM3749:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')

// two[1].style.color = 'blue'
// 'blue'   // *for single item 

// two.forEach(function(par) {
//     par.style.color = 'green' // *for whole list 
// })