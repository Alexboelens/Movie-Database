import React from 'react';
import HomeSearchBar from './HomeSearchBar';


const HomeHeader = () => {
    return (
        <div className="header-image">
            <div className="backdrop d-flex justify-content-center align-items-center flex-column">
                <div>
                    <h1 className='text-white'>Welcome!</h1>
                    <h2 className='text-white'>Countless movies, TV shows and people to discover</h2>
                </div>
            </div>
            <HomeSearchBar />
        </div>
    )
}

export default HomeHeader;