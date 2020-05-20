import React from 'react';
import backdropImage from './images/movie-image.png';
import { Container, Row, Col } from 'reactstrap';


const HomeHeader = () => {
    return (

        <div className="header-image">
            <div className="backdrop d-flex justify-content-center align-items-center">
                <div>
                    <h2 className='text-white'>Welcome!</h2>
                    <h4 className='text-white'>Countless movies, TV shows and people to discover. </h4>
                </div>

            </div>
        </div>





    )
}

export default HomeHeader;