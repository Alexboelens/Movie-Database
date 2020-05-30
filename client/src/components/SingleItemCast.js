import React from 'react';
import { Card, CardTitle, CardText, CardBody, Container, Row, Col } from 'reactstrap';
import noImage from '../components/images/no-person-image.png'
import { connect } from 'react-redux';


const SingleItemCast = ({ mainTitle, castArray }) => {
    console.log(castArray)

    // const renderActors = arr => {
    //     if (arr.length > 6) {
    //         arr

    //     }

    // }


    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <h3>{mainTitle}</h3>
                </Col>
            </Row>
            <Row className='scroller'>
                {castArray.map(item => (
                    <Col md='2' key={item.id}>
                        <Card>
                            <div className="person-card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.profile_path})` }}></div>
                            <CardBody className='actor-info'>
                                <div className="actor-info">
                                    <CardTitle className='bold'>{item.name}</CardTitle>
                                    <CardText className='italic'>{item.character}</CardText>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                ))}




            </Row>
        </Container >


    )
}

export default SingleItemCast;

{/* <Col md='2'>
 // <Card>
//     <div className="person-card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${profile_path}), url(${noImage})` }}></div>
//     <CardBody>
//         <CardTitle>{actorName}</CardTitle>
//         <CardText>{movieRole}</CardText>
//     </CardBody>
// </Card>
 </Col> */}
