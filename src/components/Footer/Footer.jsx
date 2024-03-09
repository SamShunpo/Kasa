import './Footer.scss'
import logo from '../../assets/logo_white.png'


function Footer() {
    return (
        <footer className='kasa-footer'>
            <div>
                <img src={logo} alt="Logo Kasa blanc" />
                <p>© 2024 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer