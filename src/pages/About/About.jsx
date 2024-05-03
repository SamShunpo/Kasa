import './About.scss';
import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import img2 from '../../assets/img2.png';
import Collapse from '../../components/Collapse/Collapse';

function About() {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const getAbout = async () => {
            const reponse = await fetch("http://localhost:5173/datas/about.json");
            const data = await reponse.json();
            setAbouts(data);
        };
        getAbout();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Hero img={img2} />
                <div className='collapse'>
                    {abouts.map((about, index) => (
                        <Collapse key={index} title={about.title}>
                            <p>{about.description}</p>
                        </Collapse>
                    ))}
                </div>
            </main>
            <Footer />
        </div >
    );
}

export default About