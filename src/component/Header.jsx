import { Link } from "react-router-dom";

const Header = () => {
    const handleGenerationChange = (e) => {
        const selectedGeneration = e.target.value;
        if (selectedGeneration) {
            window.location.href = `/generation/${selectedGeneration}`;
        }
    };

    const toggleMenu = () => {
        const burger = document.getElementById('burger');
        const menu = document.querySelector('.menu');
        burger.classList.toggle('open');
        menu.classList.toggle('show');
      };

    return (
        <header>
            <Link to="/"><h1 className="headerLogo">Pokebuild</h1></Link>
            <nav>
            <div id="burger" className="burger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
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
        </header>
    );
};

export default Header;