import './Rating.scss';
import starEmpty from '../../assets/star-inactive 1.png'
import starFull from '../../assets/star-active 2.png'

function Rating({ rate, max }) {
    return (
        <div>
            {[...Array(max)].map((_, index) => {
                index += 1;
                return (
                    <img className='star'
                        key={index}
                        src={index <= rate ? starFull : starEmpty}
                        alt="star"
                    />
                );
            })}
        </div>
    );
};

export default Rating