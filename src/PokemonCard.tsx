import { getPokemonData } from "./PokemonLoader.ts";

async function PokemonCard ({ pokemon }) {
    
    const singlePokemonData = await getPokemonData(pokemon.url);

    return (
        <div className="pokemon-card">
            <div className="pokemon-card-container">
                <h5>{singlePokemonData.name}</h5>
                <div 
                    style={{ 
                        display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center', 
                        backgroundColor:'white', 
                        width:'97%', 
                        height:'400px', 
                        border:'20px solid gold', 
                        borderRadius:'10px'
                    }}
                    >
                    <img src={singlePokemonData.sprites.front_default} alt="Pokemon Avatar" style={{ width:'100%' }}/>
                </div>    
                <p>This is a pokemon card</p>
            </div>
        </div>
    );
}

export default PokemonCard;