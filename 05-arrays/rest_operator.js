console.log("--------------------------------------------------")
console.log("Rest Operators :");


function openFridge(...foods) {

    console.log(foods);
}

function getfood(...foods) {
    return foods;
}

let food1 = "Pizza";
let food2 = "Idly";
let food3 = "Rice Water";
let food4 = "Ice cream";
let food5 = "Ramen";

openFridge(food1, food2, food3, food4, food5);

let foodmenu = getfood(food1, food2, food3, food4, food5);
console.log(foodmenu);

function sum(...numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        //console.log(numbers[i]);
        total = total + numbers[i];
    }
    return total;
}


function getAvg(...numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        //console.log(numbers[i]);
        total = total + numbers[i];
    }
    return total / numbers.length;
}

let total = sum(1, 2, 3, 4, 5);
let avg = getAvg(1, 2, 3, 4, 5);
console.log(total);
console.log(avg);


function conbineStrings(...words) {

    return words.join(" ");

}

let combname = conbineStrings("Mr.", "Mohamed", "Jamaludeen")

console.log(combname);
