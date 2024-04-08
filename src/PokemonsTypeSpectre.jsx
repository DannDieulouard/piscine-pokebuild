import { useState } from "react";

const PokemonsTypeSpectre = () => {
    const [pokemons, setPokemons] = useState([]);

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Spectre")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        return setPokemons(data);
    });

    return (
        <section>
            <h1>La liste entière des pokémons de type Spectre</h1>
            {pokemons.map((spectre)=>{
                        return (
                            <div>
                                <h2>{spectre.name}</h2>
                                <img src={spectre.image} alt={spectre.name}/>
                                <h3>Type :</h3>  {spectre.apiTypes.map((type)=>{
                            return (
                                <h3>{type.name}</h3>
                            )
                        })}
                        <h4>Stats :</h4> 
                        <ul>
                            <li>Vie : {spectre.stats.HP}</li>
                            <li>Attaque : {spectre.stats.attack}</li>
                            <li>Defense : {spectre.stats.defense}</li>
                            <li>Attaque Speciale : {spectre.stats.special_attack}</li>
                            <li>Defense Speciale : {spectre.stats.special_defense}</li>
                            <li>Vitesse  : {spectre.stats.speed}</li>
                        </ul>
                        </div>
                        )
                    })}
        </section>
    );
};
export default PokemonsTypeSpectre;