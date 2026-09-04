
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo-container">'
            </div>
            <nav className='nav-bar'>
                <a href="#home" className="nav-link">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header