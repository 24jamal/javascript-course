console.log("--------------------------------------------------")
console.log("Callbacks :");

function sum(callback, a, b) {

    result = a + b;
    callback(result);
}


function displayConsole(result) {
    console.log(result);
}

function displaypage(result) {
    document.getElementById("myh2").textContent = result;
}

sum(displaypage, 3, 4);
