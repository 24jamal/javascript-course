let myButtons = document.querySelectorAll(".myButtons");

myButtons.forEach((button) => {

    button.style.backgroundColor = "green";
})

myButtons.forEach((button) => {

    button.addEventListener("click", (event) => {
        button.style.backgroundColor = "tomato";
        button.textContent += "😃";
    })

})

// myButtons.forEach((button) => {

//     button.addEventListener("mouseover", (event) => {
//         button.style.backgroundColor = "cyan";
//     });
//     button.addEventListener("mouseout", (event) => {
//         button.style.backgroundColor = "green";
//     });
// })


const newbutton = document.createElement("button");

newbutton.classList = "myButtons";
newbutton.textContent = "Button 5";

document.body.appendChild(newbutton);


myButtons = document.querySelectorAll(".myButtons");
console.log(myButtons);

myButtons.forEach((button) => {

    button.addEventListener("click", (event) => {
        event.target.remove();
        myButtons = document.querySelectorAll(".myButtons");
        console.log(myButtons);
    })

})