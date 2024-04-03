const FirePokemons = ({ pokemons }) => {
    const firePokemons = pokemons.filter(pokemon => pokemon.type === "Fire");

    return (
        <div style={{ backgroundColor: 'orange' }}>
            Fire Pokemons :
            {firePokemons.map((pokemon, index) => (
                <h3 key={index}>{pokemon.name} <img src={pokemon.image} alt={pokemon.name} /></h3>
            ))}
        </div>
    );
}

export default FirePokemons;
