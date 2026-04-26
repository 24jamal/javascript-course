console.log("--------------------------------------------------")
console.log("Class :");
//class = (ES6 feature) provides a structures and more cleaner way to work with objects than traditional constructor funtions;
// ex. statis , encapsulation and inheritance

class Product {

    constructor(name, price) {

        this.name = name;
        this.price = price;

        // In class, we can mention methods inside contructor with this keyword and outside construtor with just name or  function expression
        this.calculateTotal = function (tax) {
            return this.price + (this.price * tax);
        }


    }

    displayName() {
        console.log(`The product name is ${this.name}`);
    }


}

let product1 = new Product("Milk", 25);
let product2 = new Product("Tomato", 10);
console.log(product1.name);
console.log(product1.price.toFixed(2));

product1.displayName();
console.log(product1.calculateTotal(0.05));

product2.displayName();
