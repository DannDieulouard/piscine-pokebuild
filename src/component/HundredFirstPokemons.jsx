import { useEffect, useState } from "react";

const HundredFirstPokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    // UseEffect permet de préciser quand executer une fonctionnalité
    // Soit au premier chargement du composant avec [] en second parametre
    // soit à chaque chargement du composant si on ne met pas de second parametre
    // soit quand certaines variables changes (à voir plus tard)

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        return setPokemons(data);
    });
}, []);

    return (
        <section>
            <h1>La liste entière des 100 premiers pokémons</h1>
            {pokemons ? ( 
        <>
          {pokemons.map((type) => {
            return (
              <article>
                <p>{type.name}</p>
              </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
    </section>
    );
};

export default HundredFirstPokemons;