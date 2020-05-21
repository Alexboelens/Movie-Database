import React from 'react';
import HomeHeader from './HomeHeader';
import HomeTrendingMovies from './HomeTrendingMovies';
import HomeTrendingTvShows from './HomeTrendingTvShows'
import HomeTrendingPeople from './HomeTrendingPeople'


const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeTrendingMovies />
            <HomeTrendingTvShows />
            <HomeTrendingPeople />
        </div>
    )
}


export default Home;