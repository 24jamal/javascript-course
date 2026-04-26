console.log("--------------------------------------------------")
console.log("Arrow Function :");

//Normal Function Declaration

function hellos() {
    console.log("Hello");
}

hellos();


//Function Expression
const hello2 = function () {
    console.log("Hello");
}

hello2();

//Arrow Function (Avoid arrow functions in JS objects use normal functions declarations or function expressions)
const hello3 = () => console.log("Hello Earth");

const sumnums = (a, b) => a + b;

console.log(`Arrow Sum: ${sumnums(2, 4)}`);

const newnums = [1, 2, 3, 4, 5, 6];

const newsquares = newnums.map((element) => element ** 2);

const newodds = newnums.filter((element) => (element % 2 != 0));

const newevens = newnums.filter((element) => (element % 2 == 0));

const total2 = newnums.reduce((accumulator, element) => accumulator + element)

console.log(`newsquares ${newsquares}`);
console.log(`newodds ${newodds}`);
console.log(`total : ${total2}`);
