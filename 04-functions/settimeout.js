let timeid;
function startTimer() {


    timeid = setTimeout(() => {
        window.alert("Hello");
        console.log("STARTED");
    }, 3000);
}


function clearTimer() {

    clearTimeout(timeid);
    console.log("CLEARED")

}