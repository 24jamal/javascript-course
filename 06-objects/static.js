console.log("--------------------------------------------------")
console.log("static :");
//static = keyword that defines properties or methods that belong
// to a class itself rather than the objects created
// from the class (class owns anything static , not the objects)

//we can call the properties and methods of static properties or methods without creating objects for that class


class MathUtil {
    static PI = 12.34

    static sum = function (a, b) {
        return a + b;
    }


}

class User {

    static usercount = 0;

    constructor(name) {
        this.name = name;
        User.usercount++;
    }

    static getUserCount() {
        console.log(`There are ${User.usercount} there`);
    }
}

//we directly use the proerty and methods without creating classes
console.log(MathUtil.sum(2, 4));

let user1 = new User("James");
let user2 = new User("Kyle");
let user3 = new User("John");

console.log(user1.name);
console.log(user2.name);
console.log(user3.name);

console.log(User.usercount);