import './Header.scss'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo_red.png'

function Header() {
return (
    <header className='kasa-header'>
        <img src={logo} alt="Logo Kasa rouge" />
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">A Propos</Link>
        </nav>
    </header>
)
}

export default Header