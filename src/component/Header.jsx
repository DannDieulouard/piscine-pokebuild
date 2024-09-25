import { Link } from "react-router-dom";
import logo from '../images/Pokemon-removebg-preview.png';

const Header = () => {
    return (
        <header>
            <Link to="/"><img className="logo-header" src={logo} alt="Home" /></Link>
                    <nav>
                        <ul class="menu">
                            <li><Link to="/">151 first pokemons</Link> </li>
                            <li><Link to="/resistance-type">Pokemons by Resistance Types</Link> </li>
                            <li><Link to="/pokemon-finder">PokeFinder</Link> </li>
                            <li><Link to="/generation">Pokemons by Generation</Link> </li>
                            <li><Link to="/random-team">Random Team</Link> </li>
                            <li><Link to="/pokemon-by-type">Pokemons By Type</Link> </li>
                        </ul>
                    </nav>
                    <p>Pokemon and its trademarks are 1995-2024 Nintendo, Creatures, and GAMEFREAK. English card images appearing on this website are property of The Pokemon Company International, Inc. This website is not in any way affiliated with or sponsored by the aforementions.</p>
        </header>
    )
}

export default Header;