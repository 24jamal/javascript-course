console.log("--------------------------------------------------")
console.log("Error Handling :");



try {
    console.log("Hello");

}

catch (error) {
    console.error(error);

}
finally {

    console.log("This is always exceutes");
}


console.log("Error Handling 2:");

try {

    const dividend = Number(window.prompt("Enter the dividend : "));
    const divisor = Number(window.prompt("Enter the divisor : "));

    if (divisor == 0) {
        throw new Error("Divisor cant be a Zero");
    }


    if (isNaN(divisor) || isNaN(dividend)) {
        throw new Error("Dividend or Divisor should be a number ");
    }
    let result = dividend / divisor;
    console.log(result);


}

catch (error) {
    console.error(error);
}
finally {
    console.log("This is executes finally");
}