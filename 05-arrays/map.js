console.log("--------------------------------------------------")
console.log("Map :");

const nums = [1, 2, 3, 4, 5];

function square(num) {
    num = num ** 2;
    return num;
}

let squares = nums.map(square)
console.log(squares);
for (let i = 0; i < squares.length; i++) {
    console.log(squares[i]);

}


const students = ["Jake", "Justin", "Joseph", "John"];

function uppercase(element) {
    return element.toUpperCase();
}

function lowercase(element) {
    return element.toLowerCase();
}

let uppercase2 = students.map(uppercase);
let lowercase2 = students.map(lowercase);

for (let upper of uppercase2) {
    console.log(upper);

}

for (let i = 0; i < lowercase2.length; i++) {
    console.log(lowercase2[i]);
}
const dates = ["2025-1-23", "2024-4-12", "2024-5-24"];

function formatdate(date) {

    let formatdate = date.split("-");
    return `${formatdate[1]}/${formatdate[2]}/${formatdate[0]}`;

}
let formatteddates = dates.map(formatdate);

for (let i = 0; i < formatteddates.length; i++) {

    console.log(formatteddates[i]);
}