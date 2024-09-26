import "../../src/index.css"
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <>
        <footer>
                <div className="pieddepage">
                    <Link to="/"><h4 className="footerLogo">Pokebuild</h4></Link>
                    <p>Pokémon and its trademarks are 1995-2024 Nintendo, Creatures, and GAMEFREAK. English card images appearing on this website are property of The Pokémon Company International, Inc. This website is not in any way affiliated with or sponsored by the aforementioned companies.</p>
                </div>
        </footer>
        </>
    )
}

export default Footer;