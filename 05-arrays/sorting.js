//sort = method used to sort elements of an array in place.
//sorts elements as strings in lexicographic order, not alphabetical
//lexicographic = (alphabet + numbers + symbols) as strings

let fruitsA = ["banana", "apple", "grapes", "coconut"];
fruitsA.sort();
let numbersA = [1, 4, 2, 6, 3, 7, 8, 10, 5, 9];

numbersA.sort();

console.log(numbersA);


let numbersB = [1, 4, 2, 6, 3, 7, 8, 10, 5, 9];

numbersB.sort((a, b) => a - b);

console.log(numbersB);

console.log(fruitsA);

const people = [{ "name": "Jack", "age": 34, "salary": 10000 },
{ "name": "John", "age": 44, "salary": 30000 },
{ "name": "Abraham", "age": 24, "salary": 5000 },
{ "name": "Joel", "age": 29, "salary": 10000 }
]

const lowerSalaried = people.sort((a, b) => a.salary - b.salary);

console.log(lowerSalaried);

const higherSalaried = people.sort((a, b) => a.salary - b.salary);

console.log(higherSalaried);


const alphabeticalorder = people.sort((a, b) => a.name.localeCompare(b.name));