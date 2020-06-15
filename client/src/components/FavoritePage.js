import React, { useContext, useEffect } from 'react';
import FavoriteContext from '../context/favorite/favoriteContext';
import { Container, Row, Col } from 'reactstrap';
import FavoriteItem from './FavoriteItem';

const MyList = () => {
    const favoriteContext = useContext(FavoriteContext);
    const { favorites, favoritesLoaded, getFavorites, deleteFavorite } = favoriteContext;

    useEffect(() => {
        getFavorites();
        // eslint-disable-next-line
    }, [])



    const handleDelete = async id => {
        await deleteFavorite(id);
        await getFavorites();
    }

    return (
        <Container className='d-flex flex-column' >
            <Row>
                <Col className="text-center mt-4">
                    <h1>Favorites</h1>
                    {favorites.length === 0 && <h4 className='mt-3'>No favorites added</h4>}
                </Col>
            </Row>

            <Row className='mt-3'>
                {favoritesLoaded && favorites.map(item => (

                    <FavoriteItem
                        key={item.item_id}
                        link={`/${item.category}/${item.item_id}`}
                        image={item.image}
                        category={item.category}
                        click={() => handleDelete(item.item_id)}
                        title={item.title}
                    />
                ))
                }
            </Row>
        </Container>
    )
}

export default MyList;