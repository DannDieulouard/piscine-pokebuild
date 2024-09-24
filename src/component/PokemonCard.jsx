const PokemonCard = ({pokemon})=>{
    return(
            (
                <article>
                <img  className="pokemonImage" src={pokemon.image} alt="" />
                <div className="infoPokemon">
                    <h3>{pokemon.name}</h3>
                    <div name className="typePokemon" >
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
            )
    )
}
export default PokemonCard