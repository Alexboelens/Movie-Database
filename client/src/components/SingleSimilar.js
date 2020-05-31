import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WideBox from './WideBox';
import noImage from './images/no-movie-image.png';


const SingleSimilar = ({ mainTitle, array, link }) => {
    const renderImage = item => {
        if (item.backdrop_path === null) {
            return item.poster_path;
        } else {
            return item.backdrop_path;
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>{mainTitle}</h3>
                </Col>
            </Row>
            <Row className='trailer-wrap'>
                <Col className='scroller'>
                    {array.map(item => (
                        <WideBox
                            key={item.id}
                            link={`/${link}/${item.id}`}
                            image={`https://image.tmdb.org/t/p/original${renderImage(item)}`}
                            title={item.title ? item.title : item.original_title}
                            name={item.name ? item.name : item.original_name}
                            noImage={noImage}
                        />
                    ))}
                    {array.length === 0 && <div>No similar movies added for this title.</div>}
                </Col>
            </Row>
        </Container>
    )
}

export default SingleSimilar;