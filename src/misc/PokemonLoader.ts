export async function getPokemonData(url) {
  const response = await fetch(`${url}`);
  return response.json();
}
