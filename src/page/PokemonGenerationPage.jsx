import Header from "../component/Header.jsx";
import PokemonsByGeneration from "../component/PokemonsByGeneration.jsx";

const PokemonGenerationPage = () => {
    return (
      <>
        <Header />
        <PokemonsByGeneration genNbr={1}/>
        <PokemonsByGeneration genNbr={2}/>
        <PokemonsByGeneration genNbr={3}/>
        <PokemonsByGeneration genNbr={4}/>
        <PokemonsByGeneration genNbr={5}/>
        <PokemonsByGeneration genNbr={6}/>
        <PokemonsByGeneration genNbr={7}/>
        <PokemonsByGeneration genNbr={8}/>
      </>
    );
  };
  
  export default PokemonGenerationPage;