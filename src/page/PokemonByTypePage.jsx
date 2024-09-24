import Header from "../component/Header.jsx";
import PokemonsByType from "../component/PokemonsByType.jsx";

const PokemonByTypePage = () => {
    return (
      <>
        <Header />
        <PokemonsByType type={"Feu"} />
        <PokemonsByType type={"Eau"} />
        <PokemonsByType type={"Spectre"} />
      </>
    );
  };
  
  export default PokemonByTypePage;