console.log("--------------------------------------------------")
console.log("Destructuring :");

//destruturing = extract values from arrays and objects,
//then assign to variables in a convenient way
//[] = to perform array destructuring
// {} = to perform object destruturing

const colors = ["red", "yellow", "pink", "orange", "white"];

[colors[4], colors[0]] = [colors[0], colors[4]];


const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

const person3 = {
    "firstName": "Jack",
    "lastName": "Dawson",
    "age": 29,
    "job": "painter"
}

const person4 = {
    "firstName": "Napolean",
    "lastName": "Bonaparte",
    "age": 35,
}

const { firstName, lastName, age, job = "Doctor" } = person4;

console.log(firstName);

console.log(lastName);
console.log(age);
console.log(job);

function displayName(firstName, lastName, age, job) {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
}

displayName("Jonathan", "Swift", 24, "Writer");