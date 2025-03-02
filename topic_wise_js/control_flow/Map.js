const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map((num)=> {return num + 10})
// console.log(newNums);


// *************     chaining method      **************

// const newNums2 = myNumbers.map().map() // basic structure

const newNums2 = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num > 40)

// console.log(newNums2);


//+++++++++++++++++++++++++++++++++++++++++++++++++++    REDUSE      ++++++++++++++++++++++++++++++++++

const number = [1, 2, 3,]

const mytotal = number.reduce((accumulator, currentvalue )=>{
    // console.log(`accumulator : ${accumulator} and currentvalue : ${currentvalue}`);
    return accumulator + currentvalue
}, 0)

// console.log(mytotal);


// Exersice of reduce

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce((accumulator, item)=> {
    return accumulator + item.price
},0)

console.log(pricetopay);
