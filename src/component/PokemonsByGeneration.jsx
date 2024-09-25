import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard"

const PokemonsByGeneration = (  ) => {
    const [pokemons, setPokemons] = useState([]);
    const { id } = useParams();

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        return setPokemons(data);
    });
}, [id]);

    return (
        <section>
            <h1>List of Pokemons from Generation {id}</h1>
            {!pokemons ? <><img className="spinner" src="/32eb230b326ee3c76e64f619a06f6ebb.png" alt="" /><p>Waiting for your choice</p> </>:
                pokemons.map((pokemon) => {
                    return (
                        <PokemonCard  pokemon = {pokemon}/>
                        )})
                    }
        </section>
    );
};

export default PokemonsByGeneration;