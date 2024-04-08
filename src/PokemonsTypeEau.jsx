import { useState } from "react";

const PokemonsTypeEau = () => {
    const [pokemons, setPokemons] = useState([]);

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Eau")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        return setPokemons(data);
    });

    return (
        <section>
            <h1>La liste entière des pokémons de type Eau</h1>
            {pokemons.map((eau)=>{
                        return (
                            <div>
                                <h2>{eau.name}</h2>
                                <img src={eau.image} alt={eau.name}/>
                                <h3>Type :</h3>  {eau.apiTypes.map((type)=>{
                            return (
                                <h3>{type.name}</h3>
                            )
                        })}
                        <h4>Stats :</h4> 
                        <ul>
                            <li>Vie : {eau.stats.HP}</li>
                            <li>Attaque : {eau.stats.attack}</li>
                            <li>Defense : {eau.stats.defense}</li>
                            <li>Attaque Speciale : {eau.stats.special_attack}</li>
                            <li>Defense Speciale : {eau.stats.special_defense}</li>
                            <li>Vitesse  : {eau.stats.speed}</li>
                        </ul>
                        </div>
                        )
                    })}
        </section>
    );
};

export default PokemonsTypeEau;