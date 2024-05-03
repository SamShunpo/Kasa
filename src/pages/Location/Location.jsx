import { useNavigate, useParams } from 'react-router-dom'
import './Location.scss'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carrousel from '../../components/Carrousel/Carrousel'
import Collapse from '../../components/Collapse/Collapse'
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'

function Location() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [location, setLocationData] = useState();

    useEffect(() => {
        const getLocation = async () => {
            const reponse = await fetch("http://localhost:5173/datas/locations.json");
            const locations = await reponse.json();
            const foundLocation = locations.find((location) => id === location.id)
            if (foundLocation)
                setLocationData(foundLocation);
            else
                navigate(`/logement-non-trouve`)
        }
        getLocation();

    }, [id]);

    if (!location)
        return <h1>chargement...</h1>

    return (
        <div>
            <Header />
            <main>
                <Carrousel images={location.pictures} length={location.pictures.length} title={location.title} />
                <div className='details'>
                    <div className='title'>
                        <h1>{location.title}</h1>
                        <p>{location.location}</p>
                        <div className='tags'>
                            {location.tags.map((tag, index) =>
                                <Tag key={`${index}-${tag}`} tagName={tag} />
                            )}
                        </div>
                    </div>
                    <div>
                        <div className='host'>
                            <p>{location.host.name}</p>
                            <img src={location.host.picture} alt={`photo ${location.host.name}`} />
                        </div>
                        <div className='ratingStar'>
                            <Rating rate={location.rating} max={5} />
                        </div>
                    </div>
                </div>
                <div className='collapse-location'>
                    <Collapse title="Équipements">
                        <ul>
                            {
                                location.equipments.map(eq => (<li key={eq}>{eq}</li>))
                            }
                        </ul>
                    </Collapse>
                    <Collapse title="Description">
                        <p>{location.description}</p>
                    </Collapse>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Location