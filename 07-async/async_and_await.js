function walkDog() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const isWalked = true;

            if (isWalked) {
                resolve("You walk the dog");
            }
            else {
                reject("You didnt walk the dog");
            }
        }, 2000);
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const isCleaned = true;

            if (isCleaned) {
                resolve("You clean the kitchen");
            }
            else {
                reject("you dont clean the kitchen");
            }
        }, 3500);
    })
}

function clearTrash() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const isCleared = true;

            if (isCleared) {
                resolve("You clear the trash");
            }
            else {
                reject("you dont clear the trash");
            }
        }, 500);
    })
}

async function doChores() {

    const isWalkDog = await walkDog();
    console.log(isWalkDog);

    const isclean = await cleanKitchen();
    console.log(isclean);

    const isclearTrash = await clearTrash();
    console.log(isclearTrash);
}

doChores();