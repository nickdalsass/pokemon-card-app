export function capitalizeFirstLetter (str) {
    if(str.length === 0){
        return "";
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

export function setCardBackground (pokemonType) {    
    switch(pokemonType) {
        case "grass":
            return '/type-images/grass.jpg';
        case "water":
            return '/type-images/water.jpg';
        case "dragon":
            return '/type-images/dragon.jpg';
        case "fire": 
            return '/type-images/fire.jpg'
        case "electric":
            return '/type-images/electric.jpg'
        case "ice":
            return '/type-images/ice.jpg'
        case "fairy":
            return '/type-images/fairy.jpg'
        case "ground":
            return '/type-images/ground.jpg'
        case "fighting":
            return '/type-images/fighting.jpg'
        case "flying":
            return '/type-images/flying.jpg'
        case "poison":
            return '/type-images/poison.jpg'
        case "rock":
            return '/type-images/rock.jpg'
        case "bug":
            return '/type-images/grass.jpg'
        case "ghost":
            return '/type-images/ghost.jpg'
        case "steel":
            return '/type-images/metal.jpg'
        case "psychic":
            return '/type-images/psychic.jpg'
        case "dark":
            return '/type-images/dark.jpg'
        case "stellar":
            return '/type-images/stellar.jpg'
        default:
            return '/type-images/default.jpg'
    }
}