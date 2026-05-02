
console.log("--------------------------------------------------")
console.log("Asynchronous :");

//synchronous = Executes line by line consequetely in a sequential manner
// Code that waits for an operation to complete

//asynchronous = Allows multiple operations to be performed concurrently without waiting 
//Doesnt block the excution flow and allows the  program to continue 
// (I/O operations, network requests, fetching data)
//Handled with : Callbacks, Promises, async / await


function fun1(callback) {

    setTimeout(() => {
        console.log("Hello 1");
        callback();
    }, 3000);
}


function fun2() {
    console.log("Hello 2");
    console.log("Hello 3");
    console.log("Hello 4");
}

fun1(fun2);