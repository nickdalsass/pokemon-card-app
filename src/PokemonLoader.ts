// Single poke for testing
// export async function getDittoPokemonData () {
//     const response = await fetch(
//         "https://pokeapi.co/api/v2/pokemon/ditto"
//     );
//     return response.json();
// }


// initial fetch for 25 pokemon
export async function getPokemonData (url) {
    const response = await fetch(
        `${url}`
    );
    return response.json();
}




