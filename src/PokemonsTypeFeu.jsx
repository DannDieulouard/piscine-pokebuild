import { useState } from "react";

const PokemonsTypeFeu = () => {
    const [pokemons, setPokemons] = useState([]);

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Feu")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        return setPokemons(data);
    });

    return (
        <section>
            <h1>La liste entière des pokémons de type Feu</h1>
            {pokemons.map((feu)=>{
                        return (
                            <div>
                                <h2>{feu.name}</h2>
                                <img src={feu.image} alt={feu.name}/>
                                <h3>Type :</h3>  {feu.apiTypes.map((type)=>{
                            return (
                                <h3>{type.name}</h3>
                            )
                        })}
                        <h4>Stats :</h4> 
                        <ul>
                            <li>Vie : {feu.stats.HP}</li>
                            <li>Attaque : {feu.stats.attack}</li>
                            <li>Defense : {feu.stats.defense}</li>
                            <li>Attaque Speciale : {feu.stats.special_attack}</li>
                            <li>Defense Speciale : {feu.stats.special_defense}</li>
                            <li>Vitesse  : {feu.stats.speed}</li>
                        </ul>
                        </div>
                        )
                    })}
        </section>
    );
};

export default PokemonsTypeFeu;