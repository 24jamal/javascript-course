const emoji = document.getElementById("emoji");
const mybox = document.getElementById("mybox");
let movement = 10;
let x = 0
let y = 0;


document.addEventListener("keydown", (event) => {

    if (event.key.startsWith("Arrow")) {

        event.preventDefault();
        console.log("Hi");

        switch (event.key) {

            case "ArrowLeft":
                x -= movement;
                break;

            case "ArrowRight":
                x += movement;

                break;

            case "ArrowUp":
                y -= movement;

                break;

            case "ArrowDown":
                y += movement;

                break;

        }
        emoji.textContent = "😲 OUCH"
        mybox.style.backgroundColor = "tomato";


        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;

    }

});

document.addEventListener("keyup", (event) => {

    if (event.key.startsWith("Arrow")) {
        console.log("Fired");
        emoji.textContent = "😀Hello"
        mybox.style.backgroundColor = "yellow";
    }
});