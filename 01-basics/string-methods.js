console.log("--------------------------------------------------")
console.log("String Methods :");


let username = "James";
console.log(`username : ${username}`);

console.log(`charAt(1) : ${username.charAt(1)}`);
console.log(`Lenght : ${username.length}`);
console.log(`Uppercase : ${username.toUpperCase()}`);
console.log(`Lowercase : ${username.toLowerCase()}`);

let anothername = "kyle";

let result3 = anothername.startsWith(" ");
let result4 = anothername.endsWith(" ");
let result5 = anothername.includes(" ");
if (result3) {
    console.log("name should not starts with space.")
}
else {
    console.log("Name is valid.")
}

if (result4) {
    console.log("name should not ends with space.")
}
else {
    console.log("Name is valid.")
}


if (result5) {
    console.log("name should not includes space.")
}
else {
    console.log("Name is valid.")
}

let phonenumber = "1234-5678-0987";

let replacedstr = phonenumber.replaceAll('-', '/');
let padstarts = phonenumber.padStart(20, "-");
let padends = phonenumber.padEnd(20, "*");


console.log(replacedstr);
console.log(padstarts);
console.log(padends);