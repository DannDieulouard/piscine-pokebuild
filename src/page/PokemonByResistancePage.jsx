import Header from "../component/Header.jsx";
import PokemonsByResistance from "../component/PokemonsByResistance.jsx";

const PokemonByResistancePage = () => {
    return (
      <>
        <Header />
        <PokemonByResistance type={"Feu"} />
      </>
    );
  };
  
  export default PokemonByResistancePage;