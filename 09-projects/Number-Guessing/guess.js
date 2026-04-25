let running = true;
let attempts = 1;
let min = 1;
let max = 100;
let guess = Math.floor((Math.random() * (max - min) + min))
let number;
console.log(guess);
while (running) {

    number = window.prompt("Enter the number between the 0 to 100 ")

    if (isNaN(number)) {
        console.log("please enter the valid number")
    }
    if (number > 100 && number < 1) {
        console.log("please enter the valid number")
    }

    else {
        if (number > guess) {
            attempts = attempts + 1;
            console.log("You TOO High")
        }
        if (number < guess) {
            attempts = attempts + 1;
            console.log("You TOO Low")
        }
        if (number == guess) {
            console.log("Youre Correct");
            running = false;
        }
    }

}

window.alert(`Youre correct - Attemps : ${attempts}`)

