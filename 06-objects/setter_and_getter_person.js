console.log("--------------------------------------------------")
console.log("Setter and Getter for Person :");
class PersonX {


    constructor(firstname, lastname, age) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newfirstname) {

        if (typeof newfirstname === "string" && newfirstname.length > 0) {
            this._firstname = newfirstname;
        }
        else {
            console.log("Invalid Firstname");
        }
    }


    set lastname(newlastname) {

        if (typeof newlastname === "string" && newlastname.length > 0) {
            this._lastname = newlastname;
        }
        else {
            console.log("Invalid lastname");
        }
    }


    set age(newAge) {

        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        }
        else {
            console.log("Invalid age");
        }
    }

    get fullname() {
        return `${this._firstname} ${this._lastname}`;
    }

    get age() {
        return `Age - ${this._age}`
    }
}

person123 = new PersonX("Michael", "Jackon", 45);

console.log(person123.fullname);
console.log(person123.age);
