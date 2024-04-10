import {useState} from "react";

const PokemonsByResistanceType = () => {

    const [pokemons, setPokemons] = useState(null);
    const handleSelectType = (event) => {
        event.preventDefault();
        
        const TypeToSearch = event.target.type.value;
  
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + TypeToSearch)
        .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              return false;
            }
          })
        .then((data) => {
             setPokemons(data);
        });
    };

    console.log(pokemons);

    return (
        <section>
            <form onSubmit={handleSelectType}>
                <label>Découvrez les pokémons résistants au type suivant :</label>
                <select name="type">
                    <option value="Feu">Feu</option>
                    <option value="Eau">Eau</option>
                    <option value="Plante">Plante</option>
                    <option value="Acier">Acier</option>
                    <option value="Spectre">Spectre</option>
                </select>
                <input type="submit" />
            </form>
            {!pokemons ? <p>Pokémons en cours de chargement</p> :
                pokemons.map((pokemon) => {
                    return (
                        <article key = {pokemon.id}>
                            <img src = {pokemon.image} alt="" />
                            <p>Name: {pokemon.name}</p>
                            <p>Type: {pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}</p>
                            <p>HP: {pokemon.stats.HP}</p>
                            <p>defense: {pokemon.stats.attack}</p>
                            <p>special attack: {pokemon.stats.defense}</p>
                            <p>special attack: {pokemon.special_attack}</p>
                            <p>special defense: {pokemon.stats.special_defense}</p>
                            <p>speed: {pokemon.stats.speed}</p>
                        </article>
                        )})
                    }
        </section>
    )
}

export default PokemonsByResistanceType;