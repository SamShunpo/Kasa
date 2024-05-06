import './Home.scss'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Thumb from "../../components/Thumb/Thumb"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import img1 from '../../assets/img1.png'


function Home() {

    const [locations, setLocationsData] = useState([]);

    useEffect(() => {
        const getLocationList = async () => {
            const reponse = await fetch("http://localhost:5173/datas/locations.json");
            const location = await reponse.json();
            setLocationsData(location);
        }
        getLocationList();
    }, []);


    return (

        <div className="home-page">
            <Header/>
            <main className='main-home-page'>
                <Hero img={img1} title='Chez vous, partout et ailleurs' />
                <section>
                    {locations.map(({ cover, title, id }) =>
                        <Link key={id} to={`/location/${id}`} className='link'>
                            <Thumb cover={cover} title={title} />
                        </Link>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home