console.log("--------------------------------------------------")
console.log("this-keyword :");


const personA = {

    name: "Doraemon",
    favFood: "Dorayakee",
    //Function Expression
    sayHello: function () { console.log(`Hello, I am ${this.name}`) },
    eating: function () { console.log(`${this.name} is eating his favourite food ${this.favFood}`) },
}


personA.sayHello();
personA.eating();

console.log(this);
