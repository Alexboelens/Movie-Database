import React from 'react';
import { Link } from 'react-router-dom';


const Box = props => {
    return (
        <div>
            <Link to={props.link}>
                <div className='item-box' style={{ backgroundImage: `url(${props.image}), url(${props.noImage})` }}></div>
            </Link>
            <div className='text-center title-text'>{props.title}</div>
        </div>
    )
}

export default Box;