import React, { useContext, Fragment, useEffect, useState } from 'react';
import AuthContext from '../context/auth/authContext';
import FavoriteContext from '../context/favorite/favoriteContext';
import { Button } from 'reactstrap';


const FavoriteButton = ({ title, image }) => {
    const category = window.location.pathname.split('/')[1];
    const item_id = window.location.pathname.split('/')[2];

    const authContext = useContext(AuthContext);
    const favoriteContext = useContext(FavoriteContext);

    const { isAuthenticated } = authContext;
    const { addFavorite, getFavorites, favorites, favoritesLoaded, deleteFavorite } = favoriteContext;

    const [fav, setFav] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            getFavorites();
        }
        favoritesLoaded && favorites.map(fav => (
            fav.item_id === item_id && setFav(true)
        ))
        // eslint-disable-next-line
    }, [fav, favoritesLoaded])


    const renderImage = image => {
        if (image && image !== null) {
            image = `https://image.tmdb.org/t/p/original${image}`;
        } else {
            image = 'none';
        }
        return image;
    }

    const handleAddFavorite = async () => {
        image = renderImage(image);

        await addFavorite({
            image,
            title,
            category,
            item_id,
        })
        await setFav(true);
    }

    const handleDeleteFavorite = async () => {
        await deleteFavorite(item_id);
        await setFav(false);
    }

    return (
        <Fragment>
            {isAuthenticated && fav && <Button onClick={handleDeleteFavorite} className='my-3 bg-dark favorite-btn d-flex justify-content-center align-items-center'><i className='fa fa-heart heart-icon text-danger'></i></Button>}
            {isAuthenticated && !fav && <Button onClick={handleAddFavorite} className='my-3 bg-dark favorite-btn'>Add to Favorites</Button>}
        </Fragment>
    )
}

export default FavoriteButton;