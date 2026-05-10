console.log("--------------------------------------------------")
console.log("JSON : ");
console.log("JSON Stringify ::");

friends = ["Jack", "Kyle", "John", "Max"];


const jsonString = JSON.stringify(friends);

console.log(friends);
console.log(jsonString);

person = { "name": "Jake", "Age": 24, "isEmployed": true, "hobbies": ["karate", "tennis", "playing"] };

const JSONString_person = JSON.stringify(person);
console.log(person);

console.log(JSONString_person);

peoples = [{ "name": "robin", "Age": 25, "isEmployed": true },
{ "name": "Grignard", "Age": 65, "isEmployed": true },
{ "name": "Dennis", "Age": 35, "isEmployed": true },
{ "name": "Justin", "Age": 45, "isEmployed": true }
]

console.log(peoples);
const JSONString_peoples = JSON.stringify(peoples);
console.log(JSONString_peoples);

//------------------------------------------------------------------------

console.log("JSON Parse ::");

personsJSON = `{ "name": "Jake", "Age": 24, "isEmployed": true, "hobbies": ["karate", "tennis", "playing"] }`;

const JSONObj = JSON.parse(personsJSON);

console.log(JSONObj);