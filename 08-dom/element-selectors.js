console.log("--------------------------------------------------")
console.log("Element Selectors");

//element selectors = Methods used to target and manipulates the HTML elements
//They allow you to select one or multiple HTML elements
// from the DOM (Document Object model)

//1. document.getElementById(); //ELEMENT OR NULL
//2. document.getElementsClassName(); // HTML Collection
//3 . document.getElementsByTagName(); //HTML collection
//4. document.querySelector(); //ELEMENT or NULL
//5. document.querySelectorAll(); //NODELIST

const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "cyan";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "pink";
fruits[1].style.backgroundColor = "yellow";
fruits[2].style.backgroundColor = "orange";



// for (let fruit of fruits) {

//     fruit.style.backgroundColor = "yellow";
// }

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});


const liElements = document.getElementsByTagName("li");

console.log(liElements);

const h2Elements = document.getElementsByTagName("h2");
console.log(h2Elements);

for (let h2element of h2Elements) {
    h2element.style.backgroundColor = 'yello';
}

for (let lielement of liElements) {
    lielement.style.backgroundColor = 'lightgreen';
}


const element = document.querySelector("ul");

element.style.backgroundColor = "pink";

console.log(element);

const foods = document.querySelectorAll("li");

foods.forEach((food) => {
    food.style.color = 'red';
}
)