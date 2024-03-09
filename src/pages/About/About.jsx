import './About.scss'
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Footer from "../../components/Footer/Footer"

function About() {
    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Hero />
            </div>
                <Footer />
        </div>
    )
}

export default About