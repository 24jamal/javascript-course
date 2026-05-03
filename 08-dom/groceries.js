console.log("--------------------------------------------------");
console.log("Groceries - Add and Change HTML :");

let fruits = document.getElementById("fruits");

let newFruit = document.createElement("li");
newFruit.textContent = "Raw Mango"
newFruit.style.color = "black";
newFruit.style.backgroundColor = "green";


const orange = document.getElementById("orange");
//document.getElementById("fruits").prepend(newFruit);
document.getElementById("fruits").insertBefore(newFruit, orange);

document.getElementById("fruits").removeChild(newFruit);