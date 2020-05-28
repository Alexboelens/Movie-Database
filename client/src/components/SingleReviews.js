import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';



const SingleReviews = ({ userName }) => {
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    return (
        <div>
            <Container className='review-wrap mt-5'>
                <div>
                    <p>Review by {userName}</p>
                    <ul>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, impedit debitis reiciendis odit minima adipisci amet quos eum deserunt ex optio eligendi enim distinctio deleniti nihil, molestiae, perferendis iusto ipsum!</li>
                    </ul>
                </div>
            </Container>

            {open &&
                <Container className='review-wrap mt-4 mb-3'>
                    <div>
                        <p>Review by {userName}</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veritatis quo. Distinctio assumenda ipsa eos fuga quaerat inventore unde reprehenderit similique provident impedit ratione quos, tempora natus, amet perferendis maxime?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, impedit debitis reiciendis odit minima adipisci amet quos eum deserunt ex optio eligendi enim distinctio deleniti nihil, molestiae, perferendis iusto ipsum!</li>
                        </ul>
                    </div>
                </Container>
            }



            <Container className='py-3 mb-5'>
                <p className='load-more' onClick={toggle}>{!open ? 'Load More Reviews' : 'Close'}</p>
            </Container>
        </div >

    )
}

export default SingleReviews;