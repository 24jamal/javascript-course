console.log("--------------------------------------------------")
console.log("If statements : ");


const submitBtn = document.getElementById("submit");

submitBtn.onclick = function () {
    let age = document.getElementById("input_box").value;
    if (age > 100) {
        document.getElementById("myh2").textContent = "Youre too old to enter this site";
    }
    else if (age >= 18) {
        document.getElementById("myh2").textContent = "Youre allowed enter this site";
    }
    else if (age == 0) {
        document.getElementById("myh2").textContent = "youre baby you cant enter";
    }
    else if (age < 0) {
        document.getElementById("myh2").textContent = "Invalid Age";

    }
    else if (age > 100) {
        document.getElementById("myh2").textContent = "Youre too old to enter this site";
    }
    else {
        document.getElementById("myh2").textContent = "you must be 18+ to Allow in this site";

    }


}





////////////////////////////////////////////////////////////////////


/*
let time = 12;

if (time > 12) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Morning");
}

let isStudent = false;

if (isStudent) {
    console.log("youre a student");
}
else {
    console.log("youre not a student");
}

let age2 = 18;
let license = false;

if (age2 > 16) {
    console.log("Youre old enough to drive");
    if (license) {
        console.log("You have licence");
    }
    else {
        console.log("You dont have license");
    }
}
else {
    console.log("Youre not old enough");
}

*/