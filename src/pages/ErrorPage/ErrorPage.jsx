import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import {Link} from 'react-router-dom'
import "./ErrorPage.scss"


function ErrorPage() {

    return (
        <div>
            <Header />
            <main className="main-page-error">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="link-error-page">Retourner sur la page d’accueil</Link>
            </main>
            <Footer />
        </div>

    )
}

export default ErrorPage