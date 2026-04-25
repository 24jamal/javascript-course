console.log("--------------------------------------------------")
console.log("String Slicing");

let fullname2 = "Bro code";

let firstname2 = fullname2.slice(0, 2);
let lastname2 = fullname2.slice(4);

let firstchar = fullname2.slice(0, 1);
let lastchar = fullname2.slice(-1);
console.log(firstname2);
console.log(lastname2);

console.log(firstchar);
console.log(lastchar);

let firstname3 = fullname2.slice(0, fullname2.indexOf(" "));
let lastname3 = fullname2.slice(fullname2.indexOf(" ") + 1);

console.log(firstname3);
console.log(lastname3);

let email2 = "jake@gmail.com"
let username_mail = email2.slice(0, email2.indexOf("@"));
let username_ext = email2.slice(email2.indexOf("@") + 1);

console.log(username_ext);
console.log(username_mail);