import {useState} from "react";

const PokemonFinder = () => {
    const [pokemon, setPokemon] = useState(null);

      const handleSubmit = (event) => {
      event.preventDefault();
      
      const pokemonToSearch = event.target.pokeFinder.value;

      fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonToSearch)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
           setPokemon(data);
      });
    };

console.log(pokemon);

    return (
      <section>
      <h2>Pokemon finder</h2>
      <form onSubmit={handleSubmit} action="">
          <label htmlFor="">Find Pokemon by name - French names only !</label>
          <input className="pokeInput" name="pokeFinder" type="text" />
          <input className="pokeInput pokeInput2" type="submit" />
      </form>

      {pokemon && (
          <article>
          <img className="pokemonImage" src={pokemon.image} alt="" />
          <div className="infoPokemon">
              <h3>{pokemon.name}</h3>


              <div className="typePokemon" >
                  Type :
                  {pokemon.apiTypes.map((type)=>{
                      
                      
                      return(
                          <p className={type.name}>{type.name}</p>
                          
                      )
                  })}                    
              </div>

              <div className="stats">
                  <div className="statsLeft">
                      <p>HP: {pokemon.stats.HP}</p>                    
                      <p>Attack: {pokemon.stats.attack}</p>                    
                      <p>Defense: {pokemon.stats.defense}</p>                    
                  </div>
                  <div className="statsRight">
                  <p>Special Attack: {pokemon.stats.special_attack}</p>                    
                  <p>Special Defense: {pokemon.stats.special_defense}</p>                    
                  <p>Speed: {pokemon.stats.speed}</p>
                  </div>
          </div>


          </div>
      </article>
              
          )}

  </section>
    );
};

export default PokemonFinder;