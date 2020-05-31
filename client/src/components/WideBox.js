import React from 'react';
import { Link } from 'react-router-dom';


const WideBox = ({ link, image, noImage, title, name }) => {
    return (
        <div>
            <Link to={link}>
                <div className='wide-item-box' style={{ backgroundImage: `url(${image}), url(${noImage})` }}></div>
            </Link>
            <div className='text-center title-text'>{title ? title : name}</div>
        </div>
    )
}

export default WideBox;