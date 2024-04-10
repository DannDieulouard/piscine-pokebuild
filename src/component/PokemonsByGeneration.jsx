import {useEffect, useState } from "react";

const PokemonsByGeneration = ( { genNbr }) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + genNbr)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        return setPokemons(data);
    });
}, []);

    return (
        <section>
            <h1>Liste des Pokemons de la Gen.{genNbr}</h1>
            {pokemons.map((gen1)=>{
                        return (
                            <div>
                                <h2>{gen1.name}</h2>
                                <img src={gen1.image} alt={gen1.name}/>
                                <h3>Type :</h3>  {gen1.apiTypes.map((type)=>{
                            return (
                                <h3>{type.name}</h3>
                            )
                        })}
                        <h4>Stats :</h4> 
                        <ul>
                            <li>Vie : {gen1.stats.HP}</li>
                            <li>Attaque : {gen1.stats.attack}</li>
                            <li>Defense : {gen1.stats.defense}</li>
                            <li>Attaque Speciale : {gen1.stats.special_attack}</li>
                            <li>Defense Speciale : {gen1.stats.special_defense}</li>
                            <li>Vitesse  : {gen1.stats.speed}</li>
                        </ul>
                        </div>
                        )
                    })}
        </section>
    );
};

export default PokemonsByGeneration;