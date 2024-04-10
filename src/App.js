import Header from "./Header";
import HundredFirstPokemons from "./HundredFirstPokemons";
import PokemonInteraction from "./PokemonInteraction";
import PokemonsByGeneration from "./PokemonsByGeneration";
import PokemonsByResistanceType from "./PokemonsByResistanceType";
import PokemonsByType from "./PokemonsByType";
import PokemonsTeamAleatoire from "./PokemonsTeamAleatoire";
import TypesOfPokemons from "./TypesOfPokemons";

function App() {
  return (
    <>
    <Header />
    <PokemonsByResistanceType />
    {/* <PokemonInteraction /> */}
    {/* <PokemonsByGeneration genNbr={"1"} />
    <PokemonsByGeneration genNbr={"2"} />
    <PokemonsByGeneration genNbr={"3"} />
    <PokemonsByGeneration genNbr={"4"} />
    <PokemonsByGeneration genNbr={"5"} />
    <PokemonsByGeneration genNbr={"6"} />
    <PokemonsByGeneration genNbr={"7"} />
    <PokemonsByGeneration genNbr={"8"} /> */}
    {/* <PokemonsByType type={"Feu"}/>
    <PokemonsByType type={"Eau"}/>
    <PokemonsByType type={"Spectre"}/> */}
    {/* <HundredFirstPokemons />
    <PokemonsTeamAleatoire />
    <TypesOfPokemons /> */}
    </>
  );
};

export default App;
