console.log("--------------------------------------------------")
console.log("User Input Acceptance");

document.getElementById("submit").onclick = function () {
    username = document.getElementById("username").value;
    document.getElementById("myh2").textContent = `Hello ${username}`;

}