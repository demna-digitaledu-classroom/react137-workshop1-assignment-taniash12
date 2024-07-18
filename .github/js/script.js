// დავალება 1 //

const array = [25, -34, 44, 67, 87, -68, 96, 111, 38, -27, 13];
let sum = 0;

const positiveNumbers = array.filter(function(value){
    return value >= 0;
})

for(let n of positiveNumbers)
    sum += n;

console.log(sum);


// დავალება 2 //

const array2 = ["Apple", "Banana", "Pineapple", "Apple", "Strawberry", "Banana"];
let objct = {};

array2.forEach(val => objct[val] = (objct[val] || 0) + 1);

console.log(objct);


// დავალება 3 //

const numbers = 13;

const promise = new Promise((resolve, reject) => {
    if (numbers === 13 ) {
        resolve("resolved");
    }else {
        reject("rejected");
    }
})

promise
    .then((array3) => {
        console.log("NUMBERS", numbers);
    })
    .catch(() => {});



    // ეს მესამე გავარჩიოთ კარგად ვერ გავიგე //

