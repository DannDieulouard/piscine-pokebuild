import Header from "./Header";
import HundredFirstPokemons from "./HundredFirstPokemons";
import PokemonsTypeEau from "./PokemonsTypeEau";
import PokemonsTypeFeu from "./PokemonsTypeFeu";
import PokemonsTypeSpectre from "./PokemonsTypeSpectre";
import TypesOfPokemons from "./TypesOfPokemons";

function App() {
  return (
    <>
    <Header />
    <HundredFirstPokemons />
    <TypesOfPokemons />
    <PokemonsTypeFeu />
    <PokemonsTypeEau />
    <PokemonsTypeSpectre />
    </>
  );
};

export default App;
