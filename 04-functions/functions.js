console.log("--------------------------------------------------")
console.log("Functions :");

function happybirthday(name, age) {

    console.log(`Happy birthday - ${name}, Youre ${age} years old`);

}

function add(a, b) {
    return a + b;
}


function sub(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function isEven(a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function isValidMail(email) {

    if (email.includes("@")) {
        return true;
    }

    else {
        return false;
    }
}

happybirthday("Jamal", 24);
happybirthday("Jake", 25);
happybirthday("James", 45);

console.log(add(2, 3));
console.log(sub(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(isValidMail("jamal@gmail.com"));
console.log(isValidMail("jamalgmail.com"));
console.log(isEven(4));
console.log(isEven(5));


