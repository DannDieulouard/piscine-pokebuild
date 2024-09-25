import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import PokemonResistancePage from "./page/PokemonResistancePage";
import PokemonGenerationPage from "./page/PokemonGenerationPage";
import PokemonRandomTeamPage from "./page/PokemonRandomTeamPage";
import PokemonByTypePage from "./page/PokemonByTypePage";
import PokemonFinderPage from "./page/PokemonFinderPage";
import TypesOfPokemonsPage from "./page/TypesOfPokemonsPage";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/resistance-type" element={<PokemonResistancePage />} />
        <Route path="/generation" element={<PokemonGenerationPage />} />
        <Route path="/random-team" element={<PokemonRandomTeamPage />} />
        <Route path="/pokemon-by-type" element={<PokemonByTypePage />} />
        <Route path="/pokemon-finder" element={<PokemonFinderPage />} />
        <Route path="/types-of-pokemons" element={<TypesOfPokemonsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
