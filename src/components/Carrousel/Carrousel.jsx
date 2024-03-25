import { useState } from 'react';
import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import './Carrousel.scss'


function Carrousel({ images, length, title }) {

    const [index, setIndex] = useState(0);

    function changeImage(index) {
        if (index < 0) {
            setIndex(length - 1)
        } else if (index > length - 1) {
            setIndex(0)
        } else {
            setIndex(index)
        }
    }

    return (
        <div id='carrousel'>
            {length > 1 && (
                <>
                    <img className='arrow arrow_left' src={arrow_left} alt="Image arrow left" onClick={() => changeImage(index - 1)} />
                    <img className='arrow arrow_right' src={arrow_right} alt="Image arrow right" onClick={() => changeImage(index + 1)} />
                </>
            )}
            <img className='image_carrousel' src={images[index]} alt={`Photo ${index + 1} ${title}`} />
            {length > 1 && (
                <p>{index + 1}/{length}</p>
            )}
        </div>
    )
}

export default Carrousel
