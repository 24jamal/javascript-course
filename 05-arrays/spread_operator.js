console.log("--------------------------------------------------")
console.log("Spread Operators :");


let numbers = [1, 2, 3, 4, 5];

let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log(max);

let name = "James";
let spread_name = [...name].join("-");
console.log(spread_name);

let fruits1 = ["Orange", "Apple", "Papaye"];
let vegetables = ["Brinjal", "Tomato", "Onion"];

let foods = [...fruits1, ...vegetables];

console.log(foods);