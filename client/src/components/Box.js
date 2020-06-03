import React from 'react';
import { Link } from 'react-router-dom';


const Box = ({ link, image, noImage, title, className, releaseDate }) => {

    const renderDate = string => {
        return string.split('-').reverse().join('-');
    }

    return (
        <div>
            <Link to={link}>
                <div className='item-box' style={{ backgroundImage: `url(${image}), url(${noImage})` }}></div>
            </Link>
            <div className={`${className}`}>{title}</div>
            <div className='text-center mb-2 text-muted release-date'>{releaseDate && renderDate(releaseDate)}</div>
        </div>
    )
}

export default Box;