console.log("--------------------------------------------------")
console.log("Variable Scope :");


let x = 10;

function fn1() {

    x = 20;
    console.log(x);
}

function fn2() {

    x = 30;
    console.log(x);
}

fn1();
fn2();
console.log(x);
//°