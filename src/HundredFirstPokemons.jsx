import { useState } from "react";

const HundredFirstPokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        return setPokemons(data);
    });

    return (
        <section>
            <h1>La liste entière des 100 premiers pokémons</h1>
            {pokemons.map((pokemon) => {
                return (
                    <article>
                        <h2>{pokemon.name}</h2>
                    </article>
                );
            })}
        </section>
    );
};

export default HundredFirstPokemons;