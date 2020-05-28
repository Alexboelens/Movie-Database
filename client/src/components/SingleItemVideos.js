import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const SingleItemVideos = ({ mainTitle, videoTitle }) => {
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

                        <iframe
                            className='trailer'
                            title={videoTitle}
                            allowFullScreen
                            mozallowfullscreen="mozallowfullscreen"
                            msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen"
                            webkitallowfullscreen="webkitallowfullscreen"
                            src="https://www.youtube.com/embed/sowGYbxTPgU">
                        </iframe>

                        <iframe
                            className='trailer'
                            title={videoTitle}
                            allowFullScreen
                            mozallowfullscreen="mozallowfullscreen"
                            msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen"
                            webkitallowfullscreen="webkitallowfullscreen"
                            src="https://www.youtube.com/embed/sowGYbxTPgU">
                        </iframe>

                        <iframe
                            className='trailer'
                            title={videoTitle}
                            allowFullScreen
                            mozallowfullscreen="mozallowfullscreen"
                            msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen"
                            webkitallowfullscreen="webkitallowfullscreen"
                            src="https://www.youtube.com/embed/sowGYbxTPgU">
                        </iframe>
                        <iframe
                            className='trailer'
                            title={videoTitle}
                            allowFullScreen
                            mozallowfullscreen="mozallowfullscreen"
                            msallowfullscreen="msallowfullscreen"
                            oallowfullscreen="oallowfullscreen"
                            webkitallowfullscreen="webkitallowfullscreen"
                            src="https://www.youtube.com/embed/sowGYbxTPgU">
                        </iframe>





                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default SingleItemVideos;