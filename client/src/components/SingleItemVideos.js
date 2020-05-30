import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const SingleItemVideos = ({ mainTitle, videoArray }) => {
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col>
                        <h3>{mainTitle}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='scroller'>
                        {videoArray.length !== 0 && videoArray.map(item => (
                            <iframe
                                className='trailer'
                                title={item.name}
                                allowFullScreen
                                mozallowfullscreen="mozallowfullscreen"
                                msallowfullscreen="msallowfullscreen"
                                oallowfullscreen="oallowfullscreen"
                                webkitallowfullscreen="webkitallowfullscreen"
                                src={item.key !== null && `https://www.youtube.com/embed/${item.key}`}>
                            </iframe>
                        ))}
                        {videoArray.length === 0 && <div>No videos added yet</div>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default SingleItemVideos;