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




  return (
    <>
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
            </section> 
    </>
  )
}

export default Contacts
