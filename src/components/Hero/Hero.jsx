import './Hero.scss'


function Hero({ img, title }) {

    return (
        <div className="hero" style={{ backgroundImage: `url(${img})` }}>
            <p>{title}</p>
        </div>
    );
}

export default Hero
