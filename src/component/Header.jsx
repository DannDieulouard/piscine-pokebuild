import { Link } from "react-router-dom";

const Header = () => {
    const handleGenerationChange = (e) => {
        const selectedGeneration = e.target.value;
        if (selectedGeneration) {
            window.location.href = `/generation/${selectedGeneration}`;
        }
    };

    return (
        <header>
            <Link to="/"><h1 className="mainLogo">Pokebuild</h1></Link>
            <nav>
                <ul className="menu">
                    <li><Link to="/">151 First Pokémons</Link></li>
                    <li><Link to="/pokemon-finder">PokeFinder</Link></li>
                    <li><Link to="/pokemon-by-type">Pokémons by Type</Link></li>
                    <li><Link to="/resistance-type">Pokémons by Resistance Type</Link></li>
                    <li>
                        {/* Dropdown for Pokémon Generations */}
                        <select className="selectHeader" onChange={handleGenerationChange} defaultValue="">
                            <option value="" disabled>Pokemons by Generation</option>
                            <option value="1">Generation 1 (Kanto)</option>
                            <option value="2">Generation 2 (Johto)</option>
                            <option value="3">Generation 3 (Hoenn)</option>
                            <option value="4">Generation 4 (Sinnoh)</option>
                            <option value="5">Generation 5 (Unova)</option>
                            <option value="6">Generation 6 (Kalos)</option>
                            <option value="7">Generation 7 (Alola)</option>
                            <option value="8">Generation 8 (Galar)</option>
                            <option value="9">Generation 9 (Paldea)</option>
                        </select>
                    </li>
                    <li><Link to="/random-team">Random Team</Link></li>
                </ul>
            </nav>
            <p>Pokémon and its trademarks are 1995-2024 Nintendo, Creatures, and GAMEFREAK. English card images appearing on this website are property of The Pokémon Company International, Inc. This website is not in any way affiliated with or sponsored by the aforementioned companies.</p>
        </header>
    );
};

export default Header;