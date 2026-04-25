console.log("--------------------------------------------------")
console.log("Arrays :");

let fruits = ["banana", "coconut", "apple"];

fruits.push("Mango");
fruits.pop();
fruits.unshift("Papaya");
fruits.shift();

let nooffruits = fruits.length;
let index = fruits.indexOf("apple");

console.log(fruits);
console.log(nooffruits);
console.log(index);

for (let i = 0; i < nooffruits; i++) {
    console.log(fruits[i]);
}

fruits.sort().reverse();
for (let fruit of fruits) {
    console.log(fruit);
}