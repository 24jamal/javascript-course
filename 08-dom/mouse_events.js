console.log("--------------------------------------------------")
console.log("Mouse Events :");


//eventListener = Listen for specific events to create interactive web pages
// events : click, mouseover, mouseout
//.addEventListener(event ,callback);
//event for ex: "click"
// callback for ex : function


const clickMeBtn = document.getElementById("clickmeBtn");
const myBox = document.getElementById("myBox");

clickMeBtn.addEventListener("click", (event) => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! ☹️"
}
);


clickMeBtn.addEventListener("mouseover", (event) => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Dont do this! 😲"
}
);


clickMeBtn.addEventListener("mouseout", (event) => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😊"
}
);

