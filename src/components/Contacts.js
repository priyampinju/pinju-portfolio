import React, { useState } from 'react'
import contactImg from '../assets/img/contact-img.svg'
import { Container, Row, Col } from 'react-bootstrap'

const Contacts = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }




  return (
    <>
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="" srcset="" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form action="">
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e) =>  ('first', e.target.value)}/>

                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
            </section> 
    </>
  )
}

export default Contacts
