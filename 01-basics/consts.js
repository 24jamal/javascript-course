console.log("--------------------------------------------------")
console.log("Consts :");


const PI = 3.141592;
let circumference;
document.getElementById("submit").onclick = function () {

    radius = document.getElementById("radius_input").value;

    let circumference = 2 * PI * radius;
    document.getElementById("resulth2").textContent = `Circumference of circle : ${circumference}`;

}
