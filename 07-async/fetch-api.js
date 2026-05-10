// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {

//         if (!response.ok) {
//             throw new Error("Could not fetch");
//         }

//         return response.json();
//     })
//     .then(data => console.log(data));

console.log("--------------------------------------------------")
console.log("fetch :");


async function fetchapi() {

    try {
        const pokemonname = document.getElementById("inputbox").value.toLowerCase();
        console.log(pokemonname);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        let data = await response.json();


        console.log(data.sprites.front_default);
        const image = document.getElementById("pokemonImage");

        console.log(image);
        image.style.display = "block";
        image.src = data.sprites.front_default;

    }
    catch (error) {
        console.log(error);
    }


}