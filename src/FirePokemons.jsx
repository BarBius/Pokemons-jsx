import React from 'react';
import './App.css'; // Import the CSS file

const FirePokemons = ({ pokemons }) => {
    const firePokemons = pokemons.filter(pokemon => pokemon.type === "Fire");

    return (
        <div className="fire-container"> {/* Apply the fire-container class */}
            <h2>Fire Pokemons</h2>
            {firePokemons.map((pokemon, index) => (
                <div key={index} className="fire-pokemon"> {/* Apply the fire-pokemon class */}
                    <h3 className="fire-name">{pokemon.name}</h3> {/* Apply the fire-name class */}
                    <img className="fire-image" src={pokemon.image} alt={pokemon.name} /> {/* Apply the fire-image class */}
                </div>
            ))}
        </div>
    );
}

export default FirePokemons;
