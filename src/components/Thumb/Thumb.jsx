import location from '../../datas/locations.json';
import './Thumb.scss';

function Thumb() {
    return (
        <section className='kasa-thumb'>
            {location.map(({ cover, title, id }) => (
                <article key={id} style={{
                    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(10, 10, 10, 0.00) 42%, rgba(4, 4, 4, 0.50) 80%, rgba(0, 0, 0, 0.70) 100%), url(${cover}`,
                }}>
                    <p>{title}</p>
                </article>
            ))}
        </section>
    );
}

export default Thumb