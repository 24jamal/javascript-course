console.log("--------------------------------------------------")
console.log("forEach :");

numbers = [1, 2, 3, 4, 5];

function display(element) {
    console.log(element);
}

function double(element, index, array) {
    array[index] = element * 2;
}

function square(element, index, array) {
    array[index] = element ** 2;
}


numbers.forEach(display);

// numbers.forEach(double);

// numbers.forEach(display);

numbers.forEach(square);

numbers.forEach(display);

function uppercase(element, index, array) {

    array[index] = element.toUpperCase();
}


function lowercase(element, index, array) {

    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {

    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits = ["apple", "banana", "orange"];

fruits.forEach(uppercase);

fruits.forEach(display);

fruits.forEach(lowercase);

fruits.forEach(display);


fruits.forEach(capitalize);

fruits.forEach(display);
