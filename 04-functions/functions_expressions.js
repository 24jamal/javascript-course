console.log("--------------------------------------------------")
console.log("Function Expression :");

//Normal Function declaration:
const hello = function () {
    console.log("Hello");
}


hello()
setTimeout(hello, 3000);
//Function Expression:
setTimeout(function () {
    console.log("Hello world");
}, 3000);


//Normal Map Function

const numbs = [1, 2, 3, 4, 5, 6];

function square(num) {
    return num ** 2;
}

let squared_nums = numbs.map(square);

console.log(squared_nums);

//Function Expression Map function

let squared = numbs.map(function (num) {
    return num ** 2;
});


let cubes = numbs.map(function (num) {
    return num ** 3;
});


//function expression filter method

const evens = numbs.filter(function (num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
})


const odds = numbs.filter(function (num) {
    if (num % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
})

let total = numbs.reduce(function (accumulator, element) {
    let total;
    total = accumulator + element;
    return total;
})


console.log(`Map function squared: ${squared}`);
console.log(`Map function cubes : ${cubes}`);
console.log(`Filter function Evens: ${evens}`);
console.log(`Filter function odds: ${odds}`);
console.log(`Reduce function total: ${total}`);
