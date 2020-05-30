import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WideBox from './WideBox';
import noImage from './images/no-movie-image.png';


const SingleSimilarMovies = ({ mainTitle, array }) => {
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
                            link={`/movies/${item.id}`}
                            image={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                            noImage={noImage}
                            title={item.title ? item.title : item.original_title}
                        />
                    ))}
                    {array.length === 0 && <div className='text-info'>No similar movies added for this title.</div>}
                </Col>
            </Row>
        </Container>
    )

}

export default SingleSimilarMovies;