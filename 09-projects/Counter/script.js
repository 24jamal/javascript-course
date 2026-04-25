let counter = 0;

const decreaceBtn = document.getElementById("decreaceBtn");
const increaceBtn = document.getElementById("increaceBtn");
const resetBtn = document.getElementById("resetBtn");


decreaceBtn.onclick = function () {

    counter = counter - 1;
    document.getElementById("contentLabel").textContent = counter;

}

increaceBtn.onclick = function () {

    counter = counter + 1;
    document.getElementById("contentLabel").textContent = counter;

}

resetBtn.onclick = function () {

    counter = 0;
    document.getElementById("contentLabel").textContent = counter;

}
