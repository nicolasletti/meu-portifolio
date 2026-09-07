import './Header.css'

function Header() {
    return (
        <header className="header">
            <nav className="nav-bar" aria-label="Navegacao principal">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>
        </header>
    )
}

export default Header