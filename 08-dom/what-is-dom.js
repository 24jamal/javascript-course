// DOM = Document Object Model
// Object{ } that represents page you see in the web browser
// and provides you with an API to interact with it.
// Web browser contructs the DOM when it loads an HTML Document,
//     and structures all the elements in a tree like representation.
// JavaScript can access DOM Dynamically
// change the content, style and structure of a web page 


console.log("--------------------------------------------------")
console.log("what is dom");

let username = "James";
const welcome = document.getElementById("welcomeMsg");

document.title = "Welcome page";
// document.body.style.backgroundColor = "hsl(0,0%,15%)"
console.dir(document);
welcome.textContent += username === "" ? 'Guest' : username;
