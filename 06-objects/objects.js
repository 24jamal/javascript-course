console.log("--------------------------------------------------")
console.log("Objects :");

//onject = A collection of related properties or methods
// can represent real world objects (people , products,places)


const person1 = {

    firstname: "Ratan",
    lastname: "Tata",
    age: 78,
    isEmployed: true,
    //function expression
    sayhello: function () { console.log("Hi I am Ratan") },
    eat: function () { console.log("I am eat lots of veggies, meat and eggs") }
}

const person2 = {

    firstname: "Albert",
    lastname: "Einstein",
    age: 67,
    isEmployed: true,
    // Arrow => Function (Avoid arrow in objects because this is doesn't works "this" keyword but others such function expression works and function declaration)
    sayhello: () => { console.log("Hi I am Einstein") },
    eat: () => { console.log("I am eat lots of vegetables") }
}

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayhello();
person1.eat();
person2.sayhello();
person2.eat();