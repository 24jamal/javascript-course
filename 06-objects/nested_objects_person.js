class PersonABC {


    constructor(fullname, age, isStudent, ...address) {

        this.fullname = fullname;
        this.age = age;
        this.isStudent = true;
        this.address = new Address(...address);
    }

}

class Address {
    constructor(street, city, country) {

        this.street = street;
        this.city = city;
        this.country = country;
    }

}

let personX = new PersonABC("Jake Gyllenhaal", 45, true, "Mint Street", "London", "United Kingdom");

console.log(personX.fullname);
console.log(personX.age);
console.log(personX.isStudent);
console.log(personX.address.city);
