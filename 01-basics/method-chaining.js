console.log("--------------------------------------------------")
console.log("Method Chaining");

let usernameA = window.prompt("Enter your name");

let string = usernameA.trim();

let letter = string.slice(0, 1);
letter = letter.toUpperCase();

let lastchars = string.slice(1);
lastchars = lastchars.toLowerCase();

let finalstr = letter + lastchars;

console.log(`final str without method chaining : ${finalstr}`)

//--------------------------------------------

let finalstring = usernameA.trim().slice(0, 1).toUpperCase() + usernameA.trim().slice(1).toLowerCase();

console.log(`final string with method chaining : ${finalstring}`)