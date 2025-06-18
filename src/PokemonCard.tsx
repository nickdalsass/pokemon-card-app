import { useEffect, useState } from "react";

const PokemonCard = ({ pokemon }) => {
    const [ pokemonData, setPokemonData ]= useState(null);

    const fetchPokemonResponse = async () => {
        const pokemonResponse = await fetch(pokemon.url);
        const data = await pokemonResponse.json();
        return data;
    }

    useEffect(() => {
        fetchPokemonResponse() 
            .then((data) => setPokemonData(data))
            .catch(console.error);
    }, []);

    return (
        <>
            <div className="pokemon-card">
                <div className="pokemon-card-container">
                    <h5>{pokemonData?.name}</h5>
                    <div className="background-image-container">
                        <img src={pokemonData?.sprites?.front_default} alt="Pokemon Avatar" style={{ width:'52%' }}/>
                    </div>    
                    <p>This is a pokemon card</p>
                </div>
            </div>
        </>
    );
}

export default PokemonCard;
