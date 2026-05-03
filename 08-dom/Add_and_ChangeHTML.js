const newh1 = document.createElement("h1");

newh1.textContent = "Hello World";

const newh2 = document.createElement("h1");

newh2.textContent = "Hello World";
newh2.id = "myH1"
newh2.style.color = "tomato"
newh2.style.textAlign = "center";

//document.body.prepend(newh1);
//document.getElementById("box2").append(newh2);
//document.getElementById("box2").prepend(newh2);

//insert element before the given element
// const box1 = document.getElementById("box3");
// document.body.insertBefore(newh2, box1);



// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newh2, boxes[1]);

//To remove element
document.getElementById("box2").append(newh2);
document.getElementById("box2").removeChild(newh2);