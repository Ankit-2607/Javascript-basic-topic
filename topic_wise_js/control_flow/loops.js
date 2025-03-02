//++++++++++++++++ for +++++++++++++++++ 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 7) {
        // console.log("Thala for a reason 7");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for(let j = 0; j<=10; j++) {
    // console.log(`inner loop value ${j} and inner value ${i}`);
    // console.log(`${i} * ${j} = ${i*j}`);
    }
}


// +++++++++++++++ break and continue +++++++++++++++++++

for (let index = 0; index <= 20; index++) {
    if (index === 7){
        // console.log("7 is detected");
        break;
    }
    // console.log(`value of index is ${index}`);
}


for (let index = 0; index <= 20; index++) {
    if (index === 7){
        // console.log("7 is detected");
        continue;
    }
    // console.log(`value of index is ${index}`);
}


// ++++++++++++++ while loop ++++++++++++++++++

let index = 0;
while (index <= 50) {
    // console.log(index);
    index = index + 3
}

let hero = ["ironman", "batman", "hulk", "spiderman", "superman", "captain America", "thor", "loki", "antman"];
let i = 0;
while (i < hero.length) {
    // console.log(hero[i]);
    i++
}


//+++++++++++++++ do while loop +++++++++++++++ 

let score = 1;

do {
    // console.log(score);
    score++
} while (score <= 10);





// ++++++++++++++++++ Maps ++++++++++++++++

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

