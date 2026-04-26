console.log("--------------------------------------------------")
console.log("filter :");


const numbers2 = [1, 2, 3, 4, 5, 6, 7];

function isEven(element) {
    return element % 2 == 0;
}

function isOdd(element) {
    return element % 2 != 0;
}

let evennums = numbers2.filter(isEven);
for (let i = 0; i < evennums.length; i++) {

    console.log(evennums[i]);
}

let oddnums = numbers2.filter(isOdd);

for (let i = 0; i < oddnums.length; i++) {

    console.log(oddnums[i]);
}

const words = ["Thanks", "Happy", "Good", "Elephant", "learning", "javascript"];

function isLong(element) {
    if (element.length > 6) {
        return true;
    }
    else {
        return false;
    }
}

function isShort(element) {
    if (element.length <= 6) {
        return true;
    }
    else {
        return false;
    }
}

let longwords = words.filter(isLong);
let shortwords = words.filter(isShort);

console.log("LongWords");
for (let i = 0; i < longwords.length; i++) {
    console.log(longwords[i]);
}
console.log("ShortWords");
for (let word of shortwords) {
    console.log(word);
}


