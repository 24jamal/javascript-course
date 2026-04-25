console.log("--------------------------------------------------")
console.log("Temperature Scale :");
let temp;
let toCelciusBtn = document.getElementById("tocelsiusBtn");
let tofahrBtn = document.getElementById("tofahrBtn");
let submitBtn = document.getElementById("submit");
let input_box = document.getElementById("input_box");

function convert() {

    if (toCelciusBtn.checked) {
        temp = input_box.value;
        console.log(temp);
        c = (5 / 9) * (temp - 32);
        console.log(c);
        document.getElementById("labelContent").textContent = `${c}° celcius (${temp}° fahrenheit)`;


    }
    if (tofahrBtn.checked) {
        temp = input_box.value;
        f = (9 / 5) * temp + 32;
        console.log(f);

        document.getElementById("labelContent").textContent = `${f}° fahrenhiet  (${temp}° celcius)`;

    }
}