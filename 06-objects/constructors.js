//constructor = special method   for defining the  properties and  methods of objects

//Manually creating objects one by one

let car1 = {
    make: "Suzuki",
    model: "baleno",
    year: 2022,
    color: "black",
    drive: function () { console.log(this.model) },
}

let car2 = {
    make: "BMW",
    model: "X5",
    year: 2025,
    color: "blue",
    drive: function () { console.log(this.model) },
}

let car3 = {
    make: "Audi",
    model: "q8",
    year: 2025,
    color: "black",
    drive: function () { console.log(this.model) },
}

//By creating a constructor and we add objects using class by speacial fucntion

function Car(make, model, year, color) {

    // we can use commas (,) or semicolon (;) to seperate multiple expressions
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () { console.log(` Youre driving ${this.make}`) }

}

function Person(name, age, isEmployed, eat) {
    // we can use commas (,) or semicolon (;) to seperate multiple expressions

    this.name = name,
        this.age = age,
        this.isEmployed = isEmployed,
        this.eat = function () { console.log(`${name} is eating`) }
}


car1.drive();
car2.drive();
car3.drive();

let car4 = new Car("Porsche", "911 Turbo S", 2025, "Red");

console.log(car4.make);
console.log(car4.model);
console.log(car4.year);
console.log(car4.color);
car4.drive();