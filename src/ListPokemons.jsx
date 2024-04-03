const ListPokemons = ({pokemons}) => {

return (
<section style={{ backgroundColor: 'violet' }}>
    {pokemons.map((pokemon) => (
    <article key={pokemon.id}>
        <h2>{pokemon.name}</h2>
        <p>Type: {pokemon.type}</p>
        <p>Capture Date: {pokemon.capturedAt}</p>
        <img src={pokemon.image} alt={pokemon.name} />
    </article>
    ))}
</section>
);
};

export default ListPokemons;
