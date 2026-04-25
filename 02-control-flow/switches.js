console.log("--------------------------------------------------")
console.log("Switches :");

let marks = 88;

switch (true) {

    case (marks > 90 && marks < 100):
        console.log("O grade");
        break;

    case (marks > 80 && marks <= 90):
        console.log("A grade");
        break;
    case (marks > 70 && marks <= 80):
        console.log("B grade");
        break;
    case (marks > 60 && marks <= 70):
        console.log("C grade");
        break;
    case (marks > 49 && marks <= 60):
        console.log("D grade");
        break;
    case (marks < 50):
        console.log("Fail");
        break;
    default:
        console.log("Enter valid marks ");
}