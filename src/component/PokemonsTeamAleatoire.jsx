import {useEffect, useState } from "react";

const PokemonsTeamAleatoire = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        return setPokemons(data);
    });
}, []);

    return (
        <section>
            <h1>Team aléatoire de 6 pokemons</h1>
            {pokemons.map((random)=>{
                        return (
                            <div>
                                <h2>{random.name}</h2>
                                <img src={random.image} alt={random.name}/>
                                <h3>Type :</h3>  {random.apiTypes.map((type)=>{
                            return (
                                <h3>{type.name}</h3>
                            )
                        })}
                        <h4>Stats :</h4> 
                        <ul>
                            <li>Vie : {random.stats.HP}</li>
                            <li>Attaque : {random.stats.attack}</li>
                            <li>Defense : {random.stats.defense}</li>
                            <li>Attaque Speciale : {random.stats.special_attack}</li>
                            <li>Defense Speciale : {random.stats.special_defense}</li>
                            <li>Vitesse  : {random.stats.speed}</li>
                        </ul>
                        </div>
                        )
                    })}
        </section>
    );
};


export default PokemonsTeamAleatoire;