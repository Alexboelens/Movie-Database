import React from 'react';

const Box = props => {
    return (
        <div>
            <div className='movie-box' style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className='text-center title-text'>{props.title}</div>
        </div>
    )
}

export default Box;