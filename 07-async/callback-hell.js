console.log("--------------------------------------------------")
console.log("Callback Hell :");


function fn1(callback) {

    setTimeout(() => {
        console.log("Task 1 is completed");
        callback();
    }, 2000);

}
function fn2(callback) {

    setTimeout(() => {
        console.log("Task 2 is completed");
        callback();
    }, 1500);

}
function fn3(callback) {

    setTimeout(() => {
        console.log("Task 3 is completed");
        callback();
    }, 2000);

}

function fn4(callback) {

    setTimeout(() => {
        console.log("Task 4 is completed");
        callback();
    }, 1000);

}


function fn5(callback) {

    setTimeout(() => {
        console.log("Task 5 is completed");
        callback();
    }, 1000);

}

fn1(() => {
    fn2(() => {
        fn3(() => {
            fn4(() => {
                fn5(() =>
                    console.log("All tasks are completed"));
            })
        })
    })
})


