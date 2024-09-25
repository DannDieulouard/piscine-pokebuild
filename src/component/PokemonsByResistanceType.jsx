import {useEffect, useState} from "react";
import PokemonCard from "./PokemonCard"

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

    const [types, setTypes] = useState([]);

      useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/types")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            return setTypes(data);
        });
        }, []);


    return (
        <section>
            <form onSubmit={handleSelectType}>
                <label>Discover Pokemons resistant to the following type : </label>
                <select className="selectInput" name="type">
                    {types.map((type) => {
                    return (
                        <option className= "pokeInput" value={type.name}>{type.name}</option>
                    )
                    })};
                </select>
                <input className="pokeInput pokeInput2" type="submit" value="Send"/>
            </form>
            {!pokemons ? <><img className="spinner" src="/32eb230b326ee3c76e64f619a06f6ebb.png" alt="" /><p>Waiting for your choice</p> </>:
                pokemons.map((pokemon) => {
                    return (
                        <PokemonCard  pokemon = {pokemon}/>
                        )})
                    }
        </section>
    )
}

export default PokemonsByResistanceType;