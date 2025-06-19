import React from 'react';

const PokemonSearch = () => {
    const nameBoxes = document.querySelectorAll("#name-box");
    nameBoxes.forEach((nameBox) => console.log(nameBox.innerHTML));

    return (
        <div className="search-bar">
            <img src="/images/pikachu_favicon.gif" alt="Dancing Pikachu" style={{ position:'relative', width:'100px'}}/>
            <form >
                <input className="search-form" placeholder="Search by Pokemon Name...">
                </input>
                <button
                    className="search-button"
                >
                Search
                </button>
            </form>
            <img src="/images/pokemon_logo.jpg" alt="Pokeball" style={{ position:'relative', width:'225px' }}/>
            <form>
                <input className="search-form" placeholder="Search by Pokedex Number...">
                </input>
                <button className="search-button">
                    Search
                </button>
            </form>
            <img src="/images/squirtle.gif" alt="Dancing Squirtle" style={{ position:'relative', width:'100px' }}/>
        </div>
    );
}

export default PokemonSearch;

//
//