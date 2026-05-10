const myBtn = document.getElementById("myButton");
const myh1 = document.getElementById("myh1");
let mybuttons = document.querySelectorAll(".mybtns");

myBtn.classList.add("enabled");

myh1.classList.add("enabled");


//myBtn.classList.remove("enabled");


// myBtn.addEventListener("mouseover", (event) => {

//     myBtn.classList.add("hover");
// })


// myBtn.addEventListener("mouseout", (event) => {

//     myBtn.classList.remove("hover");

// })

// myBtn.addEventListener("mouseover", (event) => {

//     myBtn.classList.toggle("hover");
// })


// myBtn.addEventListener("mouseout", (event) => {

//     myBtn.classList.toggle("hover");

// })

myBtn.addEventListener("click", (event) => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🤬";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
        console.log(myBtn);
    }
});

myh1.addEventListener("click", (event) => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🤬";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
        console.log(myh1);
    }
});

console.log("Hello  ");

mybuttons.forEach(button => {
    button.classList.add("enabled");
    console.log(button);
});

mybuttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.classList.toggle("hover");
        console.log(button);
    })

});


mybuttons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("disabled");
        console.log(button);
    })

});


