const person5 = {
    "fullName": "Issac Newton",
    "age": 57,
    "isStudent": true,
    "hobbies": ["reading", "writing", "playing"],
    "place": {
        "street": "Baron's Street",
        "city": "London",
        "Country": "United Kingdom"
    }

}

console.log(person5.fullName);
console.log(person5.age);
console.log(person5.place);
console.log(person5.hobbies);


for (let property in person5.place) {
    console.log(property + " : ", person5.place[property]);
}