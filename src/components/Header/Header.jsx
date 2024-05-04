import './Header.scss'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo_red.png'
import { useLocation } from 'react-router-dom';

function Header() {


return (
    <header className='kasa-header'>
        <img src={logo} alt="Logo Kasa rouge" className='logo'/>
        <nav>
            <Link to="/" className={`link ${location.pathname !== '/' ? 'styleSelected' :'styleUnselected'}`}>Accueil</Link>
            <Link to="/About" className={`link ${location.pathname !== '/About' ? 'styleSelected' :'styleUnselected'}`}>A Propos</Link>
        </nav>
    </header>
)
}

export default Header

