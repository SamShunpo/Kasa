import './Header.scss'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo_red.png'
import { useLocation } from 'react-router-dom';

function Header() {

    const styleSelected = {
        color: 'black',
        textDecoration: 'none',
        fontSize: '24px',
        fontWeight: '500',
        fontFamily: 'Montserrat',
    };

    const styleUnselected = {
        textDecoration: 'underline',
    };

return (
    <header className='kasa-header'>
        <img src={logo} alt="Logo Kasa rouge" />
        <nav>
            <Link to="/" style={location.pathname === '/' ? {...styleSelected,...styleUnselected}: {styleSelected}}>Accueil</Link>
            <Link to="/About" style={location.pathname === '/About'? {...styleSelected,...styleUnselected}: {styleSelected}}>A Propos</Link>
        </nav>
    </header>
)
}

export default Header