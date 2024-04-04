const LastCapturedPokemons = ({ pokemons }) => {
    // Sort the pokemons array by capture date in descending order
    const sortedPokemons = pokemons.sort((a, b) => new Date(b.capturedAt) - new Date(a.capturedAt));
    // Take the last three elements from the sorted array
    const lastCapturedPokemons = sortedPokemons.slice(0, 3);

    return (
        <div style={{ backgroundColor: 'lightgreen' }}>
            LAST CAPTURED POKEMONS: 
            {lastCapturedPokemons.map((pokemon) => (
                <div key={pokemon.id}>
                    <p>{pokemon.name}</p>
                    <p>Capture Date: {pokemon.capturedAt}</p>
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
            ))}
        </div>
    );
};

export default LastCapturedPokemons;
