function passwordgenerator(password_lenght, upper_case, lower_case, numbers, sp_chars) {


    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789";
    let specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let allowedchars = "";

    allowedchars += upper_case ? uppercase : "";
    allowedchars += lower_case ? lowercase : "";
    allowedchars += numbers ? number : "";
    allowedchars += sp_chars ? specialChars : "";

    console.log(allowedchars);

    if (allowedchars == "") {
        console.log("Please select atleast one case");
    }

    if (password_lenght == 0) {
        console.log("Password length alteast one ");
    }

    let password = "";

    for (let i = 0; i < password_lenght; i++) {

        let letterindex = Math.floor(Math.random() * 90);
        console.log(letterindex);
        let letter = allowedchars[letterindex];

        password += letter;
    }

    console.log(password);

}

passwordgenerator(10, true, true, true, true);