import './Thumb.scss';

function Thumb({ cover, title }) {
    return (
        //<section className='kasa-thumb'>
        <article style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(10, 10, 10, 0.00) 42%, rgba(4, 4, 4, 0.50) 80%, rgba(0, 0, 0, 0.70) 100%), url(${cover}`,
        }}>
            <h2>{title}</h2>
        </article>
    )
}
//</section>

export default Thumb