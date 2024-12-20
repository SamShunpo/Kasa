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
            const reponse = await fetch("http://localhost:5175/datas/about.json");
            const data = await reponse.json();
            setAbouts(data);
        };
        getAbout();
    }, []);

    return (
        <div className='global-about-page'>
            <div className='about-page'>
                <Header />
                <main className="main-about-page">
                    <Hero img={img2} />
                    <div className='collapse'>
                        {abouts.map((about, index) => (
                            <Collapse key={index} title={about.title}>
                                <p>{about.description}</p>
                            </Collapse>
                        ))}
                    </div>
                </main> 
            </div >
            <Footer />
        </div>

    );
}

export default About