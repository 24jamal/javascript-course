//closure = A function defined inside of another function
//  the inner function has access to the variables
// and scope of the outer function
// Allow for private variables and  state maintenance
// Used frequently in JS frameworks : React, Vue & Angular

console.log("--------------------------------------------------")
console.log("Closure :");

function outer() {


    message = "Hello";
    function inner() {

        console.log(message);
    }

    inner();
}

outer();


function createCounter() {

    let count = 0;

    function getCount() {

        return count;
    }

    function increment() {

        count++;
        console.log(count);
    }

    return { increment, getCount };

}

let counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.getCount();

console.log("---------------------------------------------------");

function Startgame() {


    let points = 0;
    function increaseScore(point) {
        points = points + point;
    }

    function decreaseScore(point) {
        points = points - point;
    }

    function getScore() {
        console.log(`Your score is : ${points}`)
    }

    return { increaseScore, decreaseScore, getScore }
}


game = Startgame()

game.increaseScore(10);
game.increaseScore(4);
game.decreaseScore(2);
game.getScore();