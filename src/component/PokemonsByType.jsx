import {useEffect, useState} from "react";

const PokemonsByType = ({ type }) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        return setPokemons(data);
    });
}, []);

    return (
        <section>
            <h1>La liste entière des pokémons de type {type}</h1>
            {pokemons.map((type)=>{
                        return (
                            <div>
                                <h2>{type.name}</h2>
                                <img src={type.image} alt={type.name}/>
                                <h3>Type :</h3>  {type.apiTypes.map((type)=>{
                            return (
                                <h3>{type.name}</h3>
                            )
                        })}
                        <h4>Stats :</h4> 
                        <ul>
                            <li>Vie : {type.stats.HP}</li>
                            <li>Attaque : {type.stats.attack}</li>
                            <li>Defense : {type.stats.defense}</li>
                            <li>Attaque Speciale : {type.stats.special_attack}</li>
                            <li>Defense Speciale : {type.stats.special_defense}</li>
                            <li>Vitesse  : {type.stats.speed}</li>
                        </ul>
                        </div>
                        )
                    })}
        </section>
    );
};

export default PokemonsByType;