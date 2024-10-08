import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import PokemonResistancePage from "./page/PokemonResistancePage";
import PokemonGenerationPage from "./page/PokemonGenerationPage";
import PokemonRandomTeamPage from "./page/PokemonRandomTeamPage";
import PokemonByTypePage from "./page/PokemonByTypePage";
import PokemonFinderPage from "./page/PokemonFinderPage";
import TypesOfPokemonsPage from "./page/TypesOfPokemonsPage";
import NotFoundPage from "./page/NotFoundPage";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/resistance-type" element={<PokemonResistancePage />} />
        <Route path="/generation/:id" element={<PokemonGenerationPage />} />
        <Route path="/random-team" element={<PokemonRandomTeamPage />} />
        <Route path="/pokemon-by-type" element={<PokemonByTypePage />} />
        <Route path="/pokemon-finder" element={<PokemonFinderPage />} />
        <Route path="/types-of-pokemons" element={<TypesOfPokemonsPage />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
