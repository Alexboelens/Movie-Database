import React from 'react';
import { Link } from 'react-router-dom';


const Box = ({ link, image, noImage, title, className }) => {
    return (
        <div>
            <Link to={link}>
                <div className='item-box' style={{ backgroundImage: `url(${image}), url(${noImage})` }}></div>
            </Link>
            <div className={`${className}`}>{title}</div>
        </div>
    )
}

export default Box;