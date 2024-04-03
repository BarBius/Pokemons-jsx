const RandomPokemon = ({ pokemons }) => {
const pickRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
};

const randomPokemon = pickRandomPokemon();

return (
    <div style={{ backgroundColor: 'lightcoral' }}>
    <h2>Random Pokemon</h2>

    {randomPokemon && (
        <div>
        <h3>{randomPokemon.name}</h3>
        <img src={randomPokemon.image} alt={randomPokemon.name} />
        </div>
    )}
    </div>
);
};

export default RandomPokemon;
