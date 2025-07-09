import React, { createContext, useState } from 'react';

const PokemonContext = createContext({ 
    pokemonData: [],
    setPokemonData: () => {} // TODO: This is breaking things, we need it like a useState, not a noop func
});
const PokemonProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState([]);
    return (
        <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    );
}

export { PokemonContext, PokemonProvider };