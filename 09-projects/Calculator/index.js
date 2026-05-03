

const display = document.getElementById("display");

function appendKey(input) {

    console.log("Hello");
    display.value += input;

}

function clearsData() {
    console.log("hi");
    display.value = "";
}

function calculateData() {
    let data = display.value;
    console.log(data);
    let result;
    try {
        result = eval(data);
    }
    catch (error) {
        display.value = "ERROR";
    }
    display.value = result;
}