import {useState} from "react";

const PokemonInteraction = () => {
    const [pokemon, setPokemon] = useState(null);

      const handleSubmit = (event) => {
      event.preventDefault();
      
      const pokemonToSearch = event.target.addPokemon.value;

      fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonToSearch)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
           setPokemon(data);
      });
    };

console.log(pokemon);

    return (
      <section>
      <form onSubmit={handleSubmit}>
      <label>Découvrez si votre pokémon existe</label>
      <input type="text" name="addPokemon" />
      <input type="submit" />
    </form>
    {      
             !pokemon ? <p>Pokémon en cours de rechargement</p> :   
             <article>
                <img src = {pokemon.image} alt=""/>
                <p>Name: {pokemon.name}</p>
                <p>Type: {pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}</p>
                <p>HP: {pokemon.stats.HP}</p>
                <p>defense: {pokemon.stats.attack}</p>
                <p>special attack: {pokemon.stats.defense}</p>
                <p>special attack: {pokemon.stats.special_attack}</p>
                <p>special defense: {pokemon.stats.special_defense}</p>
                <p>speed: {pokemon.stats.speed}</p>
             </article>                  
            }   
      </section>
    );
};

export default PokemonInteraction;