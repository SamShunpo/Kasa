import { useState } from 'react';
import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'
import './Collapse.scss'

function Collapse({title, children }) {
    const [isOpen, setisOpen]= useState(false);

    return (
        <article className='dropdown'>
            <header onClick={() => setisOpen(!isOpen)}>
                <h2>{title}</h2>
                <img src={isOpen ? arrow_down : arrow_up} alt="arrow" />
            </header>
            <div className={isOpen ? 'visible': 'hidden'}>{children}</div>
        </article>

    )


}

export default Collapse