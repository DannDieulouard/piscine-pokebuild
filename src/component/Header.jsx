const Header = () => {
    return (
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" />
                <h1>Welcome to Pokebuild!</h1>
                    <nav>
                        <ul class="menu">
                            <li><a href="http://localhost:3000/">ACCUEIL </a></li>
                            <li><a href="http://localhost:3000/resistance-type">RESISTANCE TYPES </a></li>
                            <li><a href="http://localhost:3000/generation">GENERATION </a></li>
                            <li><a href="http://localhost:3000/random-team">RANDOM TEAM </a></li>
                            <li><a href="http://localhost:3000/pokemon-by-type">POKEMON BY TYPE </a></li>
                            <li><a href="http://localhost:3000/pokemon-finder">POKEMON FINDER </a></li>
                            <li><a href="http://localhost:3000/types-of-pokemons">TYPES</a></li>
                        </ul>
                    </nav>
        </header>
    )
}

export default Header;