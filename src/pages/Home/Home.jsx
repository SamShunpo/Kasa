import './Home.scss'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Thumb from "../../components/Thumb/Thumb"


function Home() {
    return (
        <div>
            <div className='wrapper'>
                <Header />
                <main>
                    <Hero />
                    <Thumb />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Home