let username = "James";
let password = "MyPasword"
let loggedin = false;

while (!loggedin) {


    if (username == "James" && password == "MyPassword") {
        console.log("Youre logged in");
        loggedin = true;
    }
    else {
        console.log("Invalid Credentials");
    }
}



console.log(username);