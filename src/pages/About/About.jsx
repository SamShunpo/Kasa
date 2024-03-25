import './About.scss'
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Footer from "../../components/Footer/Footer"
import img2 from '../../assets/img2.png'

function About() {
    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Hero img={img2}/>
            </div>
                <Footer />
        </div>
    )
}

export default About