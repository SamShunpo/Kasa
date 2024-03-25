import './Hero.scss'


function Hero({ img, title }) {

    return (
        <div className="hero" style={{ backgroundImage: `url(${img})` }}>
            <h1>{title}</h1>
        </div>
    );
}

export default Hero
