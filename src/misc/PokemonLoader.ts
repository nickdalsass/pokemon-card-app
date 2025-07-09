export async function getPokemonData(url) {
  const response = await fetch(`${url}`).then(result => result.json());
  return response;
}
