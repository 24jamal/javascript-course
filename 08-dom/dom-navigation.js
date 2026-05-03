console.log("--------------------------------------------------")
console.log("DOM Navigation");

//DOM Navigation = The process of navigating through the structure
// of an HTML document using JavaScript


//For firstElementChild:
//------------------------- .firstElementChild -------------------------
// const element = document.getElementById("desserts");
// const firstElement = element.firstElementChild;
// firstElement.style.backgroundColor = "cyan";
// console.log(firstElement);


// ------------------------- .firstElementChild and .lastElementChild -------------------------
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((element) => {
//     const firstelement = element.firstElementChild;
//     firstelement.style.backgroundColor = "yellow";
//     const lastelement = element.lastElementChild;
//     lastelement.style.backgroundColor = "orange";
// });


//For firstElementChild:
//------------------------- .nextElementSibling -------------------------
// const element = document.getElementById("Banana");
// const nextSiblingElement = element.nextElementSibling;
// nextSiblingElement.style.backgroundColor = "cyan";
// console.log(nextSiblingElement);


//------------------------- .previousElementSibling -------------------------
// const element = document.getElementById("desserts");
// const previousSiblingElement = element.previousElementSibling;
// previousSiblingElement.style.backgroundColor = "cyan";
// console.log(previousSiblingElement);

//------------------------- .parentElement ------------------------- 

// const element = document.getElementById("Onion");
// const parent = element.parentElement;
// parent.style.backgroundColor = "pink";

// ------------------------- .children -------------------------

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach((element) => {
    element.style.backgroundColor = "pink";
});


children[1].style.backgroundColor = "yellow";
