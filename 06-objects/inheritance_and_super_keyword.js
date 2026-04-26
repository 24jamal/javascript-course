console.log("--------------------------------------------------")
console.log("Inhertance :");
class Animal {

    alive = true;

    eat() {
        console.log("the animal is eating");
    }

    sleep() {
        console.log(`${this.name} is sleepinh`);
    }

    move(speed) {
        console.log(`${this.name} moves at the ${speed}`);
    }
}

class Rabbit extends Animal {

    constructor(name, age, runSpeed) {
        super();
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`${this.name} is running`);
        super.move(this.runSpeed);
    }

}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super();
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log(`${this.name} is flying`);
        super.move(this.flySpeed);

    }

}

class Fish extends Animal {


    constructor(name, age, swimSpeed) {
        super();
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
    swim() {
        console.log(`${this.name} is swimming`);
        super.move(this.swimSpeed);

    }

}

let rabbit = new Rabbit("Bunny", 15, 48);
rabbit.alive = false;
console.log((rabbit.alive));
rabbit.run();
rabbit.eat();
rabbit.sleep();
console.log(rabbit.age);

let hawk = new Hawk("Eagle", 10, 70);
console.log((hawk.alive));
hawk.fly();
hawk.eat();
hawk.sleep();

let fish = new Fish("Goldfish", 5, 1.5);
console.log((fish.alive));
fish.swim();
console.log(fish.age);

fish.eat();
fish.sleep();



